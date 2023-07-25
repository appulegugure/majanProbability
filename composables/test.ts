type Tile = string | number;

export const useTest = (): Tile[] => {

  const FULL_TILE_SET: Tile[] = [];

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 4; j++) {
      FULL_TILE_SET.push(`萬${i}`, `筒${i}`, `索${i}`);
      if (i <= 1) FULL_TILE_SET.push(`東${j}`, `南${j}`, `西${j}`, `北${j}`);
      if (i <= 1) FULL_TILE_SET.push(`白${j}`, `發${j}`, `中${j}`);
    }
  }

  return FULL_TILE_SET.sort();
};

export const yourFunction = ()=> {
  return [1,2,3]
}
