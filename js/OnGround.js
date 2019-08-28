const OnGround = (Object) => {
  let j = ~~(Object.x / 32); //Целочисленное деление )) Нашел в инете
  let i = ~~(Object.y  / 32);

  // проверка на наличие блока

  if ((curLevel.map[i + 2][j] == 'G') || (curLevel.map[i + 2][j + 1] == 'G')) {
    if (Object.heroDY <= 0) {
      Object.y = i *32; //округление координаты
    }
    return true;
  } else {
    return false;
  }
}
