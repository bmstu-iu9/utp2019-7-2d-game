class BotClass {
  constructor(n, x, y) {
    /* текстура бота */
    this.texture= new Image();


    /* выбор изображения  (зависит от типа бота) */
    switch (n) {
      case 1:
        this.texture.src = "images/enemies/mummy/mummyL.png";
        this.texture.src = "images/enemies/mummy/mummyL.png";
        break;
      сфыу
      default:
        this.texture.src = "images/enemies/mummy/mummyL.png";
        this.texture.src = "images/enemies/mummy/mummyL.png";
        break;
    }

    /* тип бота */
    this.id = n;

    /* размеры бота */
    this.width = 32;
    this.height = 64;

    /* координаты бота */
    this.x = x;
    this.y = y;

    /* смещение бота */
    this.dX = 0;
    this.dY = 0;
    /*количесвто прыжков бота */
    this.dN = 0;

    /* здоровье бота */
    this.hp = 200;


    /* Гравитация бота */
    this.heroDY = 0;
    this.OnGround = false; //На земле ли бот
    this.stage = 0; //Стадия в анимации
    // this.prevStage = 0;
    // this.direction = "";
    this.orientation = "r"; //ориентация персонажа "l" - left , "r" - right
    this.posision = 0; //номер анимации
    this.airTime = 0; //время в воздухe

    /* скорость бота */
    this.speed = 0.2; //скорость

    /* характеристики стрельбы бота */
    this.fireY = 20;  // смещение от верхней границы до места выстрела по Y
    this.shootTime = 60; // время стрельбы
    this.firePower = 100 // урон по умолочанию
    this.fireSpeed = indi.speed + 0.5; // скорость снаряда
    this.shootTimeConst = 60; // время, через которое разрешен очередной выстрел


    /* смерть бота */
    this.deathR = new Image(); // смерть вправо
    this.deathL = new Image(); // смерть влево
    this.deathposision = 0; // номера анимации

    /* выбор изображения смерти (зависит от типа бота) */
    switch (n) {
      case 1:
        this.deathR.src = "images/enemies/darkMummy/mummyDeathR.png";
        this.deathL.src = "images/enemies/darkMummy/mummyDeathL.png";
        break;
      default:
        this.deathR.src = "images/enemies/mummy/mummyDeathR.png";
        this.deathL.src = "images/enemies/mummy/mummyDeathL.png";
        break;
    }

  }
}
