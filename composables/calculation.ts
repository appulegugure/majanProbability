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

function calculateProbabilitiesTop3(initialHand: HandState): HightScoreHandProbability[]{

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


// 全タイルの定義


const allTile = FULL_TILE_SET

// 手配を引いた残りのタイルの定義
const reminingTiles: Tile[] = [...allTile];

const myHand = dealInitalHand()


function dealInitalHand(): Hand {

  // 最初の手配を定義
  const initialHand: Hand = []

  // 最初の手配は残牌の中からランダムで13こ取る
  for ( let i = 0; i < 13; i++){
    const randomIndex = Math.floor(Math.random() * reminingTiles.length)
    const chooseTile = reminingTiles[randomIndex]
    initialHand.push(chooseTile)
    reminingTiles.splice(randomIndex,1)
  }

  // 残牌から手牌分を削る
  for ( const tile of initialHand){
    const index = reminingTiles.indexOf(tile)
    if (index > -1){
      reminingTiles.splice(index,1)
    }
  }

  return initialHand
}




export const useCalculation = () => {
  return ref()
}
