var HeroClass = function(hero) {

  this.hero = hero;

  /* координаты героя */
  this.x = 0;
  this.y = 0;

  /* Гравитация героя */
  this.heroDY = 0;

  /* На земле ли перс */
  this.OnGround = false;

  this.stage = 0; // Стадия в анимации
  this.prevStage = 0;
  this.direction = "";

  /* Взаимодействие с блоками */
  this.collision = function() {
    var j = ~~((indi.x + 45) / 32); //Целочисленное деление )) Нашел в инете
                                   //поэксперементируете с 40 и 80 поймете на что влияют
    var i = ~~((indi.y + 81) / 32);
    if (map[i][j] == 'G' || (map[i][j] == 'g' && this.y + 80 <= i * 32)) {
        //Здесь думаю все понятно
        this.OnGround = true;
        this.heroDY = 0;
    } else{
        this.OnGround = false;
    }
  }
};
