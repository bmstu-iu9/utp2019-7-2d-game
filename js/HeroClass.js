var HeroClass = function(hero) {

  this.hero = hero;

  /* координаты героя */
  this.x = 0;
  this.y = 0;
  this.dX = 0;
  this.dY = 0;

  /* Гравитация героя */
  this.heroDY = 0;

  /* На земле ли перс */
  this.OnGround = false;

  this.stage = 0; // Стадия в анимации
  this.prevStage = 0;
  this.direction = "";
  /*ориентация персонажа "l" - left , "r" - right */
  this.orientation = "r";
  this.posision = 0; // номер анимации
  this.airTime=0; // время в воздухe

};
