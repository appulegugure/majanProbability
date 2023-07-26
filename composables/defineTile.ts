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
  return{
    hand: 'pinf',
    probability: 10
  }
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

const chiitoitsuProbabilityEvaluator: ProbabilityEvaluator = (handState: HandState) => {

  const handTiles = handState.handTiles
  const remainingTiles = handState.remainingTiles


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
  

  return {
    hand: "chiitoitsu",
    probability: possiblePairs / neededPairs
  };
  
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