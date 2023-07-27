/*
-------------------------------------------------------------
①手牌取得


*/
import { HandState } from "./defineType";
import { dealInitalHandAndReminingTile, calculateProbabilitiesTop3 } from "./calculation";


export const useCalculation = () => {
  const { initialHand, reminingTiles } = dealInitalHandAndReminingTile();


  let handStatus: HandState = {
    handTiles: initialHand,
    remainingTiles: reminingTiles,
    isMenzen: true,
  };

  // useStateに現在の手配を追加
  useState('handState', ()=> handStatus)

  return ref(calculateProbabilitiesTop3(handStatus))

};


