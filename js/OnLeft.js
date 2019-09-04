const OnLeft = (Object) => {
  let j = ~~((Object.x - 1) / 32); //Целочисленное деление )) Нашел в инете
  let i = ~~((Object.y + 16) / 32);
  let i2 = ~~((Object.y + 48) / 32);
  return ((curLevel.map[i][j] == 'G')
  || (curLevel.map[i2][j] == 'G'));  // проверка на наличие блока
}
