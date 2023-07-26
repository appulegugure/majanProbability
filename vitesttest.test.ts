import { expect, it } from "vitest";
import { useTest, yourFunction } from "composables/test";
import { FULL_TILE_SET } from "composables/calculation"
import { countInArray } from "composables/defineutility";

it("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

it("execute useTest()", ()=> {
  const result = yourFunction();
  expect(result).toEqual([1, 2, 3]);
})

it("countInArray", ()=>{
  const result = countInArray(['東1','西2','筒1','東1','索1','白2'],'東1')
  expect(result).toEqual(2)
});

it("check full tile", ()=>{
  const defineAllTile = [
    "萬1","萬1","萬1","萬1",
    "萬2","萬2","萬2","萬2",
    "萬3","萬3","萬3","萬3",
    "萬4","萬4","萬4","萬4",
    "萬5","萬5","萬5","萬5",
    "萬6","萬6","萬6","萬6",
    "萬7","萬7","萬7","萬7",
    "萬8","萬8","萬8","萬8",
    "萬9","萬9","萬9","萬9",
    "筒1","筒1","筒1","筒1",
    "筒2","筒2","筒2","筒2",
    "筒3","筒3","筒3","筒3",
    "筒4","筒4","筒4","筒4",
    "筒5","筒5","筒5","筒5",
    "筒6","筒6","筒6","筒6",
    "筒7","筒7","筒7","筒7",
    "筒8","筒8","筒8","筒8",
    "筒9","筒9","筒9","筒9",
    "索1","索1","索1","索1",
    "索2","索2","索2","索2",
    "索3","索3","索3","索3",
    "索4","索4","索4","索4",
    "索5","索5","索5","索5",
    "索6","索6","索6","索6",
    "索7","索7","索7","索7",
    "索8","索8","索8","索8",
    "索9","索9","索9","索9",
    "東1","東1","東1","東1",
    "南1","南1","南1","南1",
    "西1","西1","西1","西1",
    "北1","北1","北1","北1",
    "白1","白1","白1","白1",
    "發1","發1","發1","發1",
    "中1","中1","中1","中1"
  ];
  expect(FULL_TILE_SET.sort()).toEqual(defineAllTile.sort())
})
