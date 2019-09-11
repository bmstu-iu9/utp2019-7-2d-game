const OnFakeBlock = (Object) => {
  let j1 = ~~((Object.x + 5) / 32); //Целочисленное деление )) Нашел в инете
  let j2 = ~~((Object.x + Object.width - 5) / 32);
  let i = ~~(Object.y  / 32);


  // проверка на наличие блока

  if ((curLevel.map[i + 2][j1] == 'g') || (curLevel.map[i + 2][j2] == 'g')) {
    if (Object.heroDY <= 0) {
      Object.y = i *32; //округление координаты
    }
    return true;
  } else {
    return false;
  }
}
