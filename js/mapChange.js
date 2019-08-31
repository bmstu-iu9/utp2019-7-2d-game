const stringChange = (i,j,v) => {
  let m = maps[lvl]; // выбираем карту
  let str = m[i]; // находим строчку
  m[i] = str.substr(0, j) + v + str.substr(j + 1); // изменяем
}
