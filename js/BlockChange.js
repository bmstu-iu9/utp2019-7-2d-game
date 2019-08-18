const BlockChange = (ii,jj,W,code) => {
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
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i].i ==  iT) && (arr[i].j ==  jT)) { //нахождение данного
      if (arr[i].id == 'C') {
        curLevel.currentCoins++;
      }
      arr[i].id = W; //смена id
    }
  }
}
