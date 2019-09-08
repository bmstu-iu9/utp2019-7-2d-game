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
    this.posision = 0;
  }
}

const getRandomInt = (min,max) => {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const parseMap = (map) => {
    for (let i = 0 ; i < map.length ; i++) {
        for (let j = 0 ; j < map[i].length ; j++) {
            if (map[i][j] == ' ') {
               var o = new MapObject(' ', i, j);
            } else if (map[i][j] == 'G') {
              var o = new MapObject('G', i, j);
            } else if (map[i][j] == 'S') {
              var o = new MapObject('S', i, j);
              blocksAfter.push(o);
              var o = new MapObject('S', i, j);
              blocks.push(o);
              continue;
            } else if (map[i][j] == 'a') {
              var o = new MapObject('a', i, j);
              blocksAfter.push(o);
              var o = new MapObject('a', i, j);
              blocks.push(o);
              continue;
            }else if (map[i][j] == 'F') {
              var o = new MapObject('F', i, j);
            } else if (map[i][j] == 'C') {
              var o = new MapObject('C', i, j);
              curLevel.allCoins++;
              blocksAfter.push(o);
              var o = new MapObject('C', i, j);
              blocks.push(o);
              continue;
            } else if (map[i][j] == 'D') {  //дверь, выход
              // var o = new MapObject('D', i, j);
              // blocksAfter.push(o);
              var o = new MapObject('D', i, j);
              blocks.push(o);
              continue;
            } else if (map[i][j] == 'g') { // Фейк-блок
              var o = new MapObject('g', i, j);
              blocksAfter.push(o);
              var o = new MapObject('g', i, j);
              blocks.push(o);
              continue;
            }else if (map[i][j] == 'W') { // Фейк-блок
              var o = new MapObject('W', i, j);
              blocksAfter.push(o);
              var o = new MapObject('W', i, j);
              blocks.push(o);
              continue;
            }else if (map[i][j] == 'L') { // Фейк-блок
              var o = new MapObject('L', i, j);
              blocksAfter.push(o);
              var o = new MapObject('L', i, j);
              blocks.push(o);
              continue;
            }else if (map[i][j] == 's') { // Фейк-блок
              var o = new MapObject('s', i, j);
              blocksAfter.push(o);
              var o = new MapObject('s', i, j);
              blocks.push(o);
              continue;
            } else if (map[i][j] == '@') {
              indi.x = j * 32  ;
              indi.y = i * 32 - 64;
              FF[0] = - indi.x + (canvas.width / NN[0] / 2);
              FF[1] = - indi.y + (canvas.height / NN[1] / 2);
              var o = new MapObject(' ', i, j);
            }  else if (map[i][j] == '1') {
              var bot1 = new BotClass(1,j * 32 ,i * 32 - 64, 3.5, 400); // создаем с данными координатами и типом
              bots.push(bot1); // вносим в массив ботов
              characters.push(bot1);
              var o = new MapObject(' ', i, j);
            } else if (map[i][j] == '2') {
              var bot2 = new BotClass(2,j * 32 ,i * 32 - 64, 1, 500); // создаем с данными координатами и типом
              bots.push(bot2); // вносим в массив ботов
              characters.push(bot2);
              var o = new MapObject(' ', i, j);
            } else if (map[i][j] == '3') {
              var bot3 = new BotClass(3,j * 32 ,i * 32 - 64, 2, 300); // создаем с данными координатами и типом
              bots.push(bot3); // вносим в массив ботов
              characters.push(bot3);
              var o = new MapObject(' ', i, j);
            } else if (map[i][j] == '4') {
              var bot4 = new BotClass(4,j * 32 ,i * 32 - 64, 2, 700); // создаем с данными координатами и типом
              bots.push(bot4); // вносим в массив ботов
              characters.push(bot4);
              var o = new MapObject(' ', i, j);
            }else if (map[i][j] == 'B') {
              let chest1 = new Chest(getRandomInt(0,27), j * 32 ,i * 32 - 32);
              chests.push(chest1);
              var o = new MapObject(' ', i, j);
            }
            blocks.push(o);
        }
    }
}
