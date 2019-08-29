class bulletClass {
  constructor(code,x,y,speed,power) {
    this.photoR = new Image();
    this.photoL = new Image();
    switch (code) {
      case 1:
        this.photoR.src = "images/weapons/bullet1R.png";
        this.photoL.src = "images/weapons/bullet1L.png";
        break;
      default:
        this.photoR.src = "images/weapons/bullet1R.png";
        this.photoL.src = "images/weapons/bullet1L.png";
    }
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.power = power;
    this.hp = 100;

  }

}
