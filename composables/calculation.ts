import { Tile, Hand, HandProbability, CompleteHand, HandState } from "./defineType";
import { FULL_TILE_SET } from "./defineTile";
import { YAKU_MAP } from "./defineYaku";

// 可能な役とその完成系のMAP定義

//手配を入力すると該当する上位3つの役が配列で返す。
// function calculateProbability(initialHand:Hand): HandProbability[]{ 
//   return[]
// }

// function calculateNeededTiles(initialHand:Hand, completeHand: CompleteHand):number{
//   return 0
// }

// function calclateProbability(neededTiles:number):number {
//   return 0
// }

type HightScoreHandProbability = {
  name: Tile
  probability: number
}

export function calculateProbabilitiesTop3(initialHand: HandState): HightScoreHandProbability[]{

  const probabilities: HightScoreHandProbability[] = []

  YAKU_MAP.map(obj => {
    if(obj.evaluator(initialHand)){
      const probability: number = obj.probabilityEvaluator(initialHand)
      probabilities.push({ name: obj.name, probability})
    } 
  })

  probabilities.sort((a,b)=>{
    return b.probability - a.probability
  })

  return  probabilities.slice(0,3); 
}


type dealInitial = {
  initialHand: Hand;
  reminingTiles: Tile[];
}

// 配牌後の手配と残牌を返す
export function dealInitalHandAndReminingTile(): dealInitial {

  // 最初の手配を定義
  const initialHand: Hand = []
  const reminingTiles: Tile[] = [...FULL_TILE_SET];

  // 最初の手配は残牌の中からランダムで14こ取る
  for ( let i = 0; i < 14; i++){
    const randomIndex: number = Math.floor(Math.random() * reminingTiles.length)
    const chooseTile: Tile = reminingTiles[randomIndex]

    // 手配に追加
    initialHand.push(chooseTile)

    // 残牌から手牌分を削る
    reminingTiles.splice(randomIndex,1)
  }

  return {
    initialHand, 
    reminingTiles
  };
}




