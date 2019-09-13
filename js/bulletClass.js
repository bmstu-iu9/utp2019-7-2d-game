class bulletClass {
  constructor(code,x,y,speed,power) {
    this.photoR = new Image(); // "правое" изображение
    this.photoL = new Image(); // "левое" изображение
    switch (code) {
      case 1:
        this.photoR.src = "images/weapons/bullet1R.png"; // "правое" изображение
        this.photoL.src = "images/weapons/bullet1L.png"; // "левое" изображение
        break;
      case 2:
        this.photoR.src = "images/weapons/bullet2R.png"; // "правое" изображение
        this.photoL.src = "images/weapons/bullet2L.png"; // "левое" изображение
        break;
      case 3:
        this.photoR.src = "images/weapons/bullet3R.png"; // "правое" изображение
        this.photoL.src = "images/weapons/bullet3L.png"; // "левое" изображение
        break;
      case 4:
        this.photoR.src = "images/weapons/bullet4R.png"; // "правое" изображение
        this.photoL.src = "images/weapons/bullet4L.png"; // "левое" изображение
        break;
      case 5:
        this.photoR.src = "images/weapons/bullet5R.png"; // "правое" изображение
        this.photoL.src = "images/weapons/bullet5L.png"; // "левое" изображение
        break;
      case 6:
        this.photoR.src = "images/weapons/bullet6R.png"; // "правое" изображение
        this.photoL.src = "images/weapons/bullet6L.png"; // "левое" изображение
        break;
      case 7:
        this.photoR.src = "images/weapons/bullet7R.png"; // "правое" изображение
        this.photoL.src = "images/weapons/bullet7L.png"; // "левое" изображение
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
    this.dY = 0;

    /* урон снаряда */
    this.power = power;

    /* количество очков прочности снаряда */
    this.hp = 900;

  }

}
