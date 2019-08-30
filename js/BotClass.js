class BotClass {
  constructor(n, x, y) {
    this.hero = new Image();
    this.id = n; //тип

    this.width = 32;
    this.height = 64;
    /* координаты бота */

    this.x = x;
    this.y = y;
    this.dX = 0;
    this.dY = 0;
    this.dN = 0;
    this.hp = 200;


    /* Гравитация бота */

    this.heroDY = 0;
    this.OnGround = false; //На земле ли бот
    this.stage = 0; //Стадия в анимации
    this.prevStage = 0;
    this.direction = "";
    this.orientation = "r"; //ориентация персонажа "l" - left , "r" - right
    this.posision = 0; //номер анимации
    this.airTime = 0; //время в воздухe


    this.fireY = 20;
    this.shootTime = 0;
    this.firePower = 100
    this.speed = 1;

    this.fireSpeed = 0.1;


    this.deathR = new Image();
    this.deathL = new Image();
    this.deathposision = 0;


    switch (n) {
      case 1:
        this.deathR.src = "images/enemies/mummy/mummyDeathR.png";
        this.deathL.src = "images/enemies/mummy/mummyDeathR.png";
        break;
      default:
        this.deathR.src = "images/enemies/mummy/mummyDeathR.png";
        this.deathL.src = "images/enemies/mummy/mummyDeathR.png";
        break;
    }
    // const stat = () => {
    //   if (this.orientation == "r") {
    //     this.hero.src = "images/hero/HeroR.png" ;
    //   } else {
    //     this.hero.src = "images/hero/HeroL.png" ;
    //   }
    // }
  }
}
