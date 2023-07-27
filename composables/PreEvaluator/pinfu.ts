import { HandEvaluator, HandState } from "composables/defineType";

// 平和の評価関数。
export const pinfuEvaluator: HandEvaluator = (handState: HandState) => {
  // const sortedHand = hand.slice().sort((a, b) => a - b);
  // for (let i = 0; i < sortedHand.length - 1; i++) {
  //     if (sortedHand[i + 1] - sortedHand[i] !== 1) {
  //         return false;
  //     }
  // }
  return true;
};
