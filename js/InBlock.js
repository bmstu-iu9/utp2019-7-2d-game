const  InBlock = (Object, WORD) => {
  // let map = maps[lvl];
  let j = ~~((Object.x + 16)  / 32); //Целочисленное деление )) Нашел в инете
  let i = ~~((Object.y + 16)  / 32);
  let i2 = ~~((Object.y + 48)  / 32)
  return  ((blocks[i * curLevel.map[0].length + j].id == WORD) || (blocks[i2 * curLevel.map[0].length + j].id == WORD));   // проверка на наличие блока
}
