import { Tile } from "./defineType";

// arrayの中にvalueがいくつ存在するかnumebrを返す。
export function countInArray(array: Tile[], value: Tile): number {
  return array.filter((item) => item === value).length;
}