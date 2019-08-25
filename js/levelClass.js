class LevelClass {
  constructor(number) {
    this.number = number;
    this.allCoins = 0; //количество монеток всего, заполняться будет при парсинге карты
    this.currentCoins = 0; // будет увеличиваться, когда игрок собирет очередную монету
    this.map = maps[lvl];
    this.doorOpen = false;
  }
}
