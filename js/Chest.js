class Chest {
  constructor(x,y) {
    /* текстура сундука */
    this.texture = new Image();
    this.texture.src = "images/environment/boxClsd.png";
    /* размеры сундука в пикселях */
    this.width = 32;
    this.height = 32;
    /* координаты сундука */
    this.x = x;
    this.y = y;

    /* Гравитация героя */
    this.heroDY = 0;
    this.OnGround = false; //На земле ли сундук

    this.airTime = 0; // время в воздухe
    this.inventory = [];
  }

}
