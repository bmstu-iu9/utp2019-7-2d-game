const BlockChange = (Object,ii,jj,WP,WN,code) => {
  let arr;
  switch (code) { // выбор по коду 0 - до , 1 - после
    case 0:
      arr = blocks;
      break;
    case 1:
      arr = blocksAfter;
      break;
    default:
      arr = blocks;
  }
  let jT = ~~(ii / 32), iT = ~~(jj / 32); //Целочисленное деление )) Нашел в инете

  let j = ~~((Object.x + 16)  / 32); //Целочисленное деление )) Нашел в инете
  let i = ~~((Object.y + 16)  / 32);
  let i2 = ~~((Object.y + 48)  / 32)

  // if (map[i][j] == WP) {
    // map[i][j] = " ";
  // }

  // if (map[i2][j] == WP) {
    // map[i2][j] = " ";
  // }

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i].i ==  iT) && (arr[i].j ==  jT) && (arr[i].id == WP)) { //нахождение данного
      arr[i].id = WN; //смена id
      map[arr[i].i][arr[i].j] = WN;
    }
  }
}
