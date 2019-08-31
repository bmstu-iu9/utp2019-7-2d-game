class bulletClass {
  constructor(code,x,y,speed,power) {
    this.photoR = new Image(); // "правое" изображение
    this.photoL = new Image(); // "левое" изображение
    switch (code) {
      case 1:
        this.photoR.src = "images/weapons/bullet1R.png"; // "правое" изображение
        this.photoL.src = "images/weapons/bullet1L.png"; // "левое" изображение
        break;
      default:
        this.photoR.src = "images/weapons/bullet1R.png"; // "правое" изображение
        this.photoL.src = "images/weapons/bullet1L.png"; // "левое" изображение
    }

    /* координаты снаряда */
    this.x = x;
    this.y = y;

    /* скорость снаряда */
    this.speed = speed;

    /* урон снаряда */
    this.power = power;

    /* количество очков прочности снаряда */
    this.hp = 100;

  }

}
