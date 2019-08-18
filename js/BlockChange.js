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
  stringChange(i,j,WN);
  for (let k = 0; k < arr.length; k++) {
    if ((arr[k].i ==  iT) && (arr[k].j ==  jT) && (arr[k].id == WP)) { //нахождение данного
      if (arr[k].id == 'C') {
        curLevel.currentCoins++;
      }
      arr[k].id = WN; //смена id
  
    }
  }

}
