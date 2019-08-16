function  InBlock(Object,WORD) {
  let j = ~~((Object.x + 16)  / 32); //Целочисленное деление )) Нашел в инете
  let i = ~~((Object.y + 16)  / 32);
  let i2 = ~~((Object.y + 48)  / 32)
  return  ((map[i][j] == WORD) || (map[i2][j] == WORD));   // проверка на наличие блока
}
