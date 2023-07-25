export type Tile = string | number; // 牌の型定義

export type Hand = Tile[]  // 手配の型定義

export type HandProbability = {  // 役とその達成率を表す型定義
  // hand: Hand
  hand: string;
  probability: number;
}

export type CompleteHand = Hand  //完成系の手配の型

export interface HandState {
  handTiles: number[]; // 手牌
  remainingTiles: number[]; // 残りの牌
  isMenzen: boolean; // 門前かどうか
  // その他、役の評価に必要な情報を追加
}

export interface HandPattern {
  name: string; // 役の名前
  han: number; // 役の翻数
  isYakuMan: boolean; // 役満かどうか
  isMenzenOnly: boolean; // 門前限定の役かどうか
  isKuisagari: boolean; //食い下がりのある役かどうか
  evaluator: HandEvaluator; //// 役の条件を評価する関数
}

export type HandEvaluator = (handState: HandState) => boolean;
