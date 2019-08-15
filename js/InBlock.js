const InBlock = (Object,W) => {
  let j = ~~((Object.x + 16)  / 32); //Целочисленное деление )) Нашел в инете
  let i = ~~((Object.y + 16)  / 32);
  let i2 = ~~((Object.y + 48)  / 32)
  return  ((map[i][j] == W) || (map[i2][j] == W));   // проверка на наличие блока
}
