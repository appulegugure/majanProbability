import { HandEvaluator, ProbabilityEvaluator, HandState, HandPattern, HandProbability, Tile } from "./defineType";


// 平和

// 平和の評価関数。
const pinfuEvaluator: HandEvaluator = (handState: HandState) => {

  // const sortedHand = hand.slice().sort((a, b) => a - b);
  // for (let i = 0; i < sortedHand.length - 1; i++) {
  //     if (sortedHand[i + 1] - sortedHand[i] !== 1) {
  //         return false;
  //     }
  // }
  return true;
};

const pinfProbabilityEvaluator: ProbabilityEvaluator = (handState: HandState) => {
  return 10
}

//　平和のデータ構造
const pinfu: HandPattern = {
  name:'ピンフ',
  han: 1,
  isYakuMan: false,
  isMenzenOnly: true, // 門前限定の役かどうか
  isKuisagari: false,
  evaluator: pinfuEvaluator,
  probabilityEvaluator: pinfProbabilityEvaluator, // 役が完成する確率を計算する関数
}



// 七対子

// 七対子の評価関数 [役が成立しない場合にfalse]
const chiitoitsuEvaluator: HandEvaluator = (handState: HandState) => {

  const handTiles = handState.handTiles;

  // 門前チェック　
  if( handState.isMenzen === chiitoitsu.isMenzenOnly) return false

  // 手牌の中に4つ以上同じ牌があればチートイツは不可能
  for (let i = 0; i < handTiles.length; i++) {
    if ( !checkFourOrMore( handTiles )) {
      return false;
    }
  }

  function checkFourOrMore(array: Tile[]): boolean {
    const counts: { [key: string]: number } = array.reduce((acc: { [key: string]: number }, value: Tile) => {
      const tileKey = String(value); 
      acc[tileKey] = (acc[tileKey] || 0) + 1;
      return acc;
    }, {});

    for (let key in counts) {
      if (counts[key] >= 4) {
        return false;
      }
    }

    return true;
  }

  return true
}


// 確率計算　難あり
const chiitoitsuProbabilityEvaluator: ProbabilityEvaluator = (handState: HandState) => {
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

  //--------------------------------------------------------------------------------------------------------

  interface TileWithProbability {
    tile: Tile;
    probability: number;
    index: number;
  }

  function getTileProbabilities(
    handTiles: Tile[],
    remainingTiles: Tile[]
  ): TileWithProbability[] {
    let tileProbabilities: TileWithProbability[] = [];

    // 既にペアになっている牌を確認
    let pairedTiles = new Set(
      handTiles.filter((tile) => countInArray(handTiles, tile) >= 2)
    );

    handTiles.forEach((tile, index) => {
      let probability;

      // ペアになっている牌は確率を最大にする
      if (pairedTiles.has(tile)) {
        probability = 1;
      } else {
        probability = probabilityOfChiitoi(handTiles, remainingTiles, tile); // Modify this line as per your probability function
      }

      tileProbabilities.push({
        tile: tile,
        probability: probability,
        index: index,
      });
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

  //--------------------------------------------------------------------------------------------------------

  function probabilityOfChiitoi(
    handTiles: Tile[],
    remainingTiles: Tile[],
    targetTile: Tile
  ): number {
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
  /*
  let neededPairs = 7 - countPairs(handTiles);

  if (neededPairs === 0) return 1

  let possiblePairs = 0;
  for (let i = 0; i < remainingTiles.length; i++) {
    if (countInArray(remainingTiles, remainingTiles[i]) >= 2) {
      possiblePairs++;
      i++;
    }
  }


  function countPairs(array: Tile[]): number {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (countInArray(array, array[i]) >= 2) {
        count++;
        i++;
      }
    }

    return count;
  }
  

  return possiblePairs / neededPairs //現在揃ってる
  */

  return chiitoiProbability;
}

// チートイツのデータ構造。
const chiitoitsu: HandPattern = {
  name: "チートイツ",
  han: 2,
  isYakuMan: false,
  isMenzenOnly: true, 
  isKuisagari: false,
  evaluator: chiitoitsuEvaluator,
  probabilityEvaluator: chiitoitsuProbabilityEvaluator, // 役が完成する確率を計算する関数
};



export const YAKU_MAP: HandPattern[] = [
  pinfu, 
  chiitoitsu
];