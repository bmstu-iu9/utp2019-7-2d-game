var BotClass = function(n,x,y) {

  this.hero = new Image();
  this.number = n; //тип
  /* координаты бота */
  this.x = x;
  this.y = y;
  this.dX = 0;
  this.dY = 0;

  /* Гравитация бота */
  this.heroDY = 0;

  /* На земле ли бот */
  this.OnGround = false;

  this.stage = 0; // Стадия в анимации
  this.prevStage = 0;
  this.direction = "";
  /*ориентация персонажа "l" - left , "r" - right */
  this.orientation = "r";
  this.posision = 0; // номер анимации
  this.airTime=0; // время в воздухe
};
