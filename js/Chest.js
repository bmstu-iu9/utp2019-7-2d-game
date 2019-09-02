class Chest {
  constructor(n,x,y) {
    this.id = n;
    /* текстура сундука */
    this.texture = new Image();
    this.texture.src = "images/environment/boxClsd.png";
    /* размеры сундука в пикселях */
    this.width = 32;
    this.height = 32;
    /* координаты сундука */
    this.x = x;
    this.y = y;

    /* Гравитация сундука */
    this.heroDY = 0;
    this.OnGround = false; //На земле ли сундук

    this.airTime = 0; // время в воздухe
    this.inventory = [];

    switch (this.id) {
      case 1:
        this.inventory.push(new inventory(life,100,0,0,0,0,0));
        break;
      case 2:
        this.inventory.push(new inventory(rbl,0,1,0,0,0,0));
        break;
      case 3:
          this.inventory.push(new inventory(up,0,0,0,1,0,0));
        break;
      case 4:
          this.inventory.push(new inventory(up,0,0,100,0,0,0));
        break;
      case 5:
          this.inventory.push(new inventory(up,0,0,200,0,0,0));
          this.inventory.push(new inventory(down,0,0,0,-2,0,0));
        break;
      case 6:
          this.inventory.push(new inventory(up,0,0,1200,0,0,0));
          this.inventory.push(new inventory(down,0,0,0,-4,0,0));
        break;
      case 7:
          this.inventory.push(new inventory(rbl,0,2,0,0,0,0));
          this.inventory.push(new inventory(down,0,0,0,-1,0,0));
        break;
      case 8:
          this.inventory.push(new inventory(life,200,0,0,0,0,0));
          this.inventory.push(new inventory(down,0,0,0,-1,0,0));
        break;
      case 9:
          this.inventory.push(new inventory(up,0,0,10,0,0,0));
        break;
      case 10:
          this.inventory.push(new inventory(up,0,0,20,0,0,0));
        break;
      case 11:
          this.inventory.push(new inventory(up,0,0,10,0,0,0));
        break;
      case 12:
          this.inventory.push(new inventory(up,0,0,10,0,0,0));
        break;
      case 13:
          this.inventory.push(new inventory(up,0,0,0,0,3,0));
        break;
      case 14:
          this.inventory.push(new inventory(up,0,0,0,0,1,0));
        break;
      case 15:
          this.inventory.push(new inventory(up,0,0,0,0,2,0));
        break;
      case 16:
          this.inventory.push(new inventory(up,0,0,3000,0,0,0));
          this.inventory.push(new inventory(down,0,0,0,-2,0,0));
          this.inventory.push(new inventory(down,0,0,0,0,0,-0.04));
        break;
      case 17:
          this.inventory.push(new inventory(up,0,0,300,0,0,0));
          this.inventory.push(new inventory(down,0,0,0,0,0,-0.01));
        break;
      case 18:
          this.inventory.push(new inventory(up,0,0,0,0,0,0.005));
        break;
      case 19:
          this.inventory.push(new inventory(down,0,0,-50,0,0,0));
          this.inventory.push(new inventory(up,0,0,0,0,0,0.02));
        break;
      case 20:
          this.inventory.push(new inventory(up,0,0,50,0,0,0));
          this.inventory.push(new inventory(down,0,0,0,0,0,0.02));
        break;
      case 21:
          this.inventory.push(new inventory(up,0,0,0,1,0,0));
          this.inventory.push(new inventory(down,0,0,0,0,0,-0.005));
        break;
      case 22:
          this.inventory.push(new inventory(up,0,0,0,2,0,0));
          this.inventory.push(new inventory(down,0,0,0,0,0,-0.01));
        break;
      case 23:
          this.inventory.push(new inventory(up,50,0,0,0,0,0));
          this.inventory.push(new inventory(up,0,0,0,0,0,0.01));
      //   break;
      default:
          this.inventory.push(new inventory(up,50,0,0,0,0,0));
          // this.inventory.push(new inventory(up,0,0,3000,-2,0,-0.04));

    }
  }

}
