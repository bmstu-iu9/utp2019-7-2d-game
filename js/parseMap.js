/* Парсер карты
G - земля
S - шипы
F - факел
C - предмет
@ - локация появления ГГ
g - разрушающийся блок земли
Если пробел - пропускаем;
Если видим какой-то блок, то определяем какой это блок
и создаем под него объект, и кидаем в список блоков blocks */

class MapObject {
  constructor(id, i, j) {
    this.id = id;
    this.x = j * 32;
    this.y = i * 32;
    this.i = i;
    this.j = j;
  }
}

const parseMap = (map) => {
    for (let i = 0 ; i < map.length ; i++) {
        for (let j = 0 ; j < map[i].length ; j++) {
            if (map[i][j] == ' ') {
                continue;
            } else if (map[i][j] == 'G') {
              var o = new MapObject('G', i, j);
            } else if (map[i][j] == 'S') {
              var o = new MapObject('S', i, j);
            } else if (map[i][j] == 'F') {
              var o = new MapObject('F', i, j);
            } else if (map[i][j] == 'C') {
              var o = new MapObject('C', i, j);
              curLevel.allCoins++;
            } else if (map[i][j] == 'g') { // Фейк-блок
              var o = new MapObject('g', i, j);
              blocksAfter.push(o);
              continue;
            } else if (map[i][j] == '@') {
              indi.x = j * 32  ;
              indi.y = i * 32 - 64;
              var o = new MapObject('@', i, j);
            }
            blocks.push(o);
        }
    }
}
