import { Tile, HandState, ProbabilityEvaluator } from "composables/defineType";
import { countInArray } from "../defineutility";

interface TileWithProbability {
  tile: Tile;
  probability: number;
  index: number;
}

export const chiitoitsuProbabilityEvaluator: ProbabilityEvaluator = ( handState: HandState) => {
  const handTiles = handState.handTiles;
  const remainingTiles = handState.remainingTiles;

  // 各牌の確率を取得
  const tileProbabilities = getTileProbabilities(handTiles, remainingTiles);

  // 確率が高い順にソート
  tileProbabilities.sort((a, b) => b.probability - a.probability);

  // 上位7つの牌の確率を取得
  const top7Probabilities = tileProbabilities
    .slice(0, 7)
    .map((tile) => tile.probability);

  // 確率を積算して七対子の確率を算出
  const chiitoiProbability = top7Probabilities.reduce(
    (acc, curr) => acc * curr,
    1
  );
  
  return chiitoiProbability;
};


// 各牌が対子になる確率を計算
function getTileProbabilities( handTiles: Tile[], remainingTiles: Tile[]): TileWithProbability[] {
  let tileProbabilities: TileWithProbability[] = [];

  // 既にペアになっている牌を確認
  let pairedTiles = new Set(
    handTiles.filter((tile) => countInArray(handTiles, tile) >= 2)
  );

  handTiles.forEach((tile, index) => {
    let probability;

    // 既にペアになっている牌は確率を最大にする
    if (pairedTiles.has(tile)) {
      probability = 1;
    } else {
      probability = probabilityOfChiitoi(handTiles, remainingTiles, tile); // Modify this line as per your probability function
    }

    tileProbabilities.push({ tile: tile, probability: probability, index: index });
  });

  tileProbabilities.sort((a, b) => {
    if (a.probability > b.probability) {
      return -1;
    } else if (a.probability < b.probability) {
      return 1;
    } else {
      return a.index - b.index;
    }
  });

  return tileProbabilities;
}



function probabilityOfChiitoi(handTiles: Tile[], remainingTiles: Tile[], targetTile: Tile): number {
  const totalRemainingTiles = remainingTiles.length;

  // 手牌中の対象の牌の数
  const numTargetTileInHand = countInArray(handTiles, targetTile);

  // 山札中の対象の牌の数
  const numTargetTileInDeck = countInArray(remainingTiles, targetTile);

  // ペアが既にある場合、確率は1
  if (numTargetTileInHand >= 2) {
    return 1;
  }

  // ペアがない場合、その牌をドローする確率を計算
  if (numTargetTileInHand === 1 && numTargetTileInDeck > 0) {
    return numTargetTileInDeck / totalRemainingTiles;
  }

  // その牌が手牌にも山札にもない場合、確率は0
  return 0;
}