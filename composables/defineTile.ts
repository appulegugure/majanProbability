import { HandEvaluator, HandState, HandPattern, Tile } from "./defineType";


// 平和

// 平和の評価関数。
const pinfuEvaluator: HandEvaluator = (handState: HandState) => {
  // ピンフの条件を評価するロジックをここに記述します。

  // const sortedHand = hand.slice().sort((a, b) => a - b);
  // for (let i = 0; i < sortedHand.length - 1; i++) {
  //     if (sortedHand[i + 1] - sortedHand[i] !== 1) {
  //         return false;
  //     }
  // }
  return true;
};

//　平和のデータ構造
const pinfu: HandPattern = {
  name:'ピンフ',
  han: 1,
  isYakuMan: false,
  isMenzenOnly: true, // 門前限定の役かどうか
  isKuisagari: false,
  evaluator: pinfuEvaluator
}



// 七対子

// 七対子の評価関数
const chiitoitsuEvaluator: HandEvaluator = (handState: HandState) => {
  // チートイツの条件を評価するロジックをここに記述します。
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

// チートイツのデータ構造。
const chiitoitsu: HandPattern = {
  name: "チートイツ",
  han: 2,
  isYakuMan: false,
  isMenzenOnly: true, 
  isKuisagari: false,
  evaluator: chiitoitsuEvaluator,
};



export const YAKU_MAP: HandPattern[] = [
  pinfu, 
  chiitoitsu
];