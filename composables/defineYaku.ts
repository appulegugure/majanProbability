import { HandEvaluator, ProbabilityEvaluator, HandState, HandPattern, HandProbability, Tile } from "./defineType";
import { chiitoitsuProbabilityEvaluator} from "./ProbabilityEvaluator/chiitoitsu";
import { pinfProbabilityEvaluator } from "./ProbabilityEvaluator/pinfu";
import { test1PreEvo } from "./PreEvaluator/test1";
import { test2PreEvo } from "./PreEvaluator/test2";
import { test3PreEvo } from "./PreEvaluator/test3";
import { test1ProBaBi } from "./ProbabilityEvaluator/test1";
import { test2ProBaBi } from "./ProbabilityEvaluator/test2";
import { test3ProBaBi } from "./ProbabilityEvaluator/test3";
import { pinfuEvaluator } from "./PreEvaluator/pinfu";
import { chiitoitsuEvaluator } from "./PreEvaluator/chiitoitsu";


// 平和
//　平和のデータ構造
const pinfu: HandPattern = {
  name:'平和',
  han: 1,
  isYakuMan: false,
  isMenzenOnly: true, // 門前限定の役かどうか
  isKuisagari: false,
  evaluator: pinfuEvaluator,
  probabilityEvaluator: pinfProbabilityEvaluator, 
}

// 七対子
// データ構造。
const chiitoitsu: HandPattern = {
  name: "七対子",
  han: 2,
  isYakuMan: false,
  isMenzenOnly: true, 
  isKuisagari: false,
  evaluator: chiitoitsuEvaluator,
  probabilityEvaluator: chiitoitsuProbabilityEvaluator, 
};

// 国士無双
// 国士無双データ構造
const kokushimusou: HandPattern = {
  name: "国士無双",
  han: -1,
  isYakuMan: true,
  isMenzenOnly: false,
  isKuisagari: false,
  evaluator: chiitoitsuEvaluator,
  probabilityEvaluator: chiitoitsuProbabilityEvaluator,
};



// test1

const test1: HandPattern = {
  name: "テスト_1",
  han: 2,
  isYakuMan: false,
  isMenzenOnly: true,
  isKuisagari: false,
  evaluator: test1PreEvo,
  probabilityEvaluator: test1ProBaBi,
};
// test2

const test2: HandPattern = {
  name: "テスト_2",
  han: 2,
  isYakuMan: false,
  isMenzenOnly: true,
  isKuisagari: false,
  evaluator: test2PreEvo,
  probabilityEvaluator: test2ProBaBi,
};
// test3

const test3: HandPattern = {
  name: "テスト_3",
  han: 2,
  isYakuMan: false,
  isMenzenOnly: true,
  isKuisagari: false,
  evaluator: test3PreEvo,
  probabilityEvaluator: test3ProBaBi,
};


export const YAKU_MAP: HandPattern[] = [
  pinfu, 
  chiitoitsu,
  test1,
  test2,
  test3
];