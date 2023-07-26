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

// 七対子の評価関数
const chiitoitsuEvaluator: HandEvaluator = (handState: HandState) => {
  
  // if (hand.length % 2 !== 0) {
  //   return false;
  // }
  // const sortedHand = hand.slice().sort((a, b) => a - b);
  // for (let i = 0; i < sortedHand.length; i += 2) {
  //   if (sortedHand[i] !== sortedHand[i + 1]) {
  //     return false;
  //   }
  // }
  return true;
};

const chiitoitsuProbabilityEvaluator: ProbabilityEvaluator = (handState: HandState) => {
  return{
    hand: 'chiitoitsu',
    probability: 10
  }
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