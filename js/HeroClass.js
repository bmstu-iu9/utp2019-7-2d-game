class HeroClass {
  constructor(hero) {
    this.hero = hero;

    this.width = 32;
    this.height = 64;

    /* координаты героя */

    this.x = 0;
    this.y = 0;
    this.dX = 0;
    this.dY = 0;
    this.xp = 200;
    /* Гравитация героя */
    this.heroDY = 0;
    this.OnGround = false; //На земле ли перс
    this.stage = 0; //Стадия в анимации
    this.prevStage = 0;
    this.direction = "";
    this.orientation = 'r'; //ориентация персонажа "l" - left , "r" - right
    this.posision = 0; // номер анимации
    this.airTime = 0; // время в воздухe

    this.fireY = 13;
    this.shootTime = 0;
    this.firePower = 100
    this.fireSpeed = 1;
    this.shoot = true;

    this.deathR = new Image();
    this.deathL = new Image();
    this.deathposision = 0;

    // const stat = () => {
    //   if (this.orientation == "r") {
    //     this.hero.src = "images/hero/HeroR.png" ;
    //   } else {
    //     this.hero.src = "images/hero/HeroL.png" ;
    //   }
    // }
  }

}
