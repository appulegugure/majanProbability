import { Tile } from "./defineType";



export const FULL_TILE_SET: Tile[] = generateAllTile();

function generateAllTile(): Tile[] {
  const tmp_all_tile = [];
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 4; j++) {
      tmp_all_tile.push(`萬${i}`, `筒${i}`, `索${i}`);
      if (i <= 1) tmp_all_tile.push(`東${i}`, `南${i}`, `西${i}`, `北${i}`);
      if (i <= 1) tmp_all_tile.push(`白${i}`, `發${i}`, `中${i}`);
    }
  }
  return tmp_all_tile;
}