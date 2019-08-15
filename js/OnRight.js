const OnRight = (Object) => {
  let j = ~~((Object.x + 1) / 32); //Целочисленное деление )) Нашел в инете
  let i = ~~(Object.y / 32);
  let i2 = ~~((Object.y - 1) / 32);
  return ((map[i + 1][j + 1] == 'G') || (map[i][j + 1] == 'G') || (map[i2 + 2][j + 1] == 'G')); // проверка на наличие блока
}
