import { Tile, Hand, HandProbability, CompleteHand } from "./defineType";

// 可能な役とその完成系のMAP定義
const HAND_MAP: Record<string, CompleteHand[]> = {
  "七対子":[],
  "平和":[]
}

//手配を入力すると該当する上位3つの役が配列で返す。
function calculateProbability(initialHand:Hand): HandProbability[]{ 
  return[]
}

function calculateNeededTiles(initialHand:Hand, completeHand: CompleteHand):number{
  return 0
}

function calclateProbability(neededTiles:number):number {
  return 0
}

/*一旦コメントアウト
function calculateProbabilities(initialHand:Hand):HandProbability[]{

  const probabilities: HandProbability[] = []

  for ( const[ handName, completeHands] of Object.entries( HAND_MAP)){
    for ( const completeHand of completeHands){

      const neededTiles = calculateNeededTiles( initialHand, completeHand);

      const probability = calclateProbability(neededTiles)

      probabilities.push({ hand: handName, probability})
    }
  }
  
  probabilities.sort((a,b)=>{
    return b.probability - a.probability
  })

  return  probabilities.slice(0,3); 
}
*/

// 全タイルの定義


// 全体タイルセットの定義
function generateAllTile():Tile[]{
  const tmp_all_tile = []
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 4; j++) {
      tmp_all_tile.push(`萬${i}`, `筒${i}`, `索${i}`);
      if (i <= 1) tmp_all_tile.push(`東${i}`, `南${i}`, `西${i}`, `北${i}`);
      if (i <= 1) tmp_all_tile.push(`白${i}`, `發${i}`, `中${i}`);
    }
  }
  return tmp_all_tile
}

export const FULL_TILE_SET: Tile[] = generateAllTile();


// 手配を引いた残りのタイルの定義
const reminingTiles: Tile[] = [...FULL_TILE_SET];

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
