import { Tile, HandEvaluator, HandState } from "composables/defineType";

export const chiitoitsuEvaluator: HandEvaluator = (handState: HandState) => {
  const handTiles = handState.handTiles;

  // 門前チェック
  if (handState.isMenzen) return false;

  // 手牌の中に4つ以上同じ牌があればチートイツは不可能
  for (let i = 0; i < handTiles.length; i++) {
    if (!checkFourOrMore(handTiles)) {
      return false;
    }
  }

  function checkFourOrMore(array: Tile[]): boolean {
    const counts: { [key: string]: number } = array.reduce(
      (acc: { [key: string]: number }, value: Tile) => {
        const tileKey = String(value);
        acc[tileKey] = (acc[tileKey] || 0) + 1;
        return acc;
      },
      {}
    );

    for (let key in counts) {
      if (counts[key] >= 4) {
        return false;
      }
    }

    return true;
  }

  return true;
};
