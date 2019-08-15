const OnCeil = (Object) => {
  let j = ~~(Object.x / 32); //Целочисленное деление )) Нашел в инете
  let i = ~~(Object.y / 32);
  let i2 = ~~((Object.y + 1) / 32);
  if (i >= 1) {
    return ((map[i][j] == 'G') || (map[i][j + 1] == 'G')); // проверка на наличие блока
  } else {
    return true;
  }
}
