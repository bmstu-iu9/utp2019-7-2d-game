const OnCeil = (Object) => {
  let j = ~~(Object.x / 32); //Целочисленное деление )) Нашел в инете
  let i = ~~(Object.y / 32);
  let i2 = ~~((Object.y + 1) / 32);
  if (i >= 1) {
    return ((curLevel.map[i][j] == 'G') || (curLevel.map[i][j + 1] == 'G')); // проверка на наличие блока
  } else {
    return true;
  }
}
