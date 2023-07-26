type Tile = string | number;

export const useTest = (): Tile[] => {

  const FULL_TILE_SET: Tile[] = [];

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 4; j++) {
      FULL_TILE_SET.push(`萬${i}`, `筒${i}`, `索${i}`);
      if (i <= 1) FULL_TILE_SET.push(`東${i}`, `南${i}`, `西${i}`, `北${i}`);
      if (i <= 1) FULL_TILE_SET.push(`白${i}`, `發${i}`, `中${i}`);
    }
  }

  return FULL_TILE_SET.sort();
};

export const yourFunction = ()=> {
  return [1,2,3]
}
