class Hero {
  constructor(image) {
    /* текстура героя */
    this.texture = image;
    /* размеры героя в пикселях */
    this.width = 32;
    this.height = 64;
    /* координаты героя */
    this.x = 0;
    this.y = 0;
    /* здоровье героя в */
    this.hp = 300;
    /* Гравитация героя */
    this.heroDY = 0;
    this.OnGround = false; //На земле ли перс
    // this.stage = 0; //Стадия в анимации
    // this.prevStage = 0;
    this.orientation = 'r'; //ориентация персонажа "l" - left , "r" - right
    this.posision = 0; // номер анимации
    this.airTime = 0; // время в воздухe
    /* характеристики стрельбы героя */
    this.fireY = 13; // смещение от верхней границы до места выстрела по Y
    this.shootTime = 0.0; // время стрельбы
    this.firePower = 100 // урон по умолчанию
    this.fireSpeed = 5; // скорость пули по умолчанию
    this.shoot = true; // флажок стрельбы
    /* скорость героя */
    this.speed = 4;
    /* смерть героя :( */
    this.deathR = new Image(); // смерть вправо
    this.deathL = new Image(); // смерть влевво
    this.deathposision = 0; // номер анимации
  }

}
