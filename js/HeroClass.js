class Hero {
  constructor(image) {
    this.texture = image;

    this.width = 32;
    this.height = 64;
    this.shootTime = 0.0;
    /* координаты героя */
    this.x = 0;
    this.y = 0;
    this.hp = 300;
    /* Гравитация героя */
    this.heroDY = 0;
    this.OnGround = false; //На земле ли перс
    this.stage = 0; //Стадия в анимации
    this.prevStage = 0;
    this.orientation = 'r'; //ориентация персонажа "l" - left , "r" - right
    this.posision = 0; // номер анимации
    this.airTime = 0; // время в воздухe

    this.fireY = 13;
    this.shootTime = 0;
    this.firePower = 100
    this.fireSpeed = 1;
    this.shoot = true;
    this.speed = 1;
  }

}
