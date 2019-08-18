const InBlock = (Object,W) => {
  let j = ~~((Object.x + 16)  / 32); //Целочисленное деление )) Нашел в инете
  let i = ~~((Object.y + 16)  / 32);
  let i2 = ~~((Object.y + 48)  / 32)
  // if (curLevel.map[i][j] == 'C') {
  //   curLevel.currentCoins++;
  //   curLevel.map[i][j] = ' ';
  //   return true;
  // } else if (curLevel.map[i2][j] == 'C') {
  //   curLevel.currentCoins++;
  //   curLevel.map[i2][j] = ' ';
  //   return true;
  // }
  return  ((curLevel.map[i][j] == W) || (curLevel.map[i2][j] == W));   // проверка на наличие блока
}
