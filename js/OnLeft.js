const OnLeft = (Object) => {
  let j = ~~((Object.x - 1) / 32); //Целочисленное деление )) Нашел в инете
  let i = ~~(Object.y / 32);
  let i2 = ~~((Object.y - 1) / 32);
  return ((map[i + 1][j] == 'G') || (map[i][j] == 'G') || (map[i2 + 2][j] == 'G'));  // проверка на наличие блока
}
