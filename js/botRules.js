function botRules(DD){
  bot = bots[0];
  photo = new Image();
  switch (bot.number) {
    case 1:
      photo.src = "images/bot1R.png";
      break;
    case 2:
      photo.src = "images/bot2R.png";
      break;
    case 3:
      photo.src = "images/bot3R.png";
      break;
    default:
      photo.src = "images/bot1R.png";
  }

  bot.hero = photo;

  function moveL(b){ //смещение бота
    b.x -= 0.3;
  }

  function moveR(b){  //смещение бота
    b.x += 0.3;
  }

  function moveU(b){ //смещение бота
    if (OnGround(b) && !OnCeil(b)) {
      b.heroDY = 2;
    }
  }

  function moveD(b){ //смещение бота
    if (OnCeil(b) && b.heroDY > 0) {
      b.heroDY = 0;
    }
    b.y -= b.heroDY;
    if (! OnGround(b)) {
      b.heroDY -= 0.02;
    }else {
      b.heroDY = 0;
    }
  }


function goBotLeft(){  // смещение "до конца"
  if (!OnLeft(bot)) {
    moveL(bot);
  }
  if ( OnLeft(bot) ) {
      moveU(bot);
  }
}


function goBotRight(){ // смещение "до конца"
  if (!OnRight(bot)) {
    moveR(bot);
  }
  if ( OnRight(bot) ) {
      moveU(bot);
  }
}

function Find() {  //поиск Инди
  if (Math.abs(indi.x - bot.x ) > 50) {
    if (indi.x > bot.x) {
      goBotRight(bot);
    } else {
      goBotLeft(bot);
    }
  }
}

/* ОСНОВА */
moveD(bot);
Find();

/* отрисовка бота*/
ctx.drawImage(bot.hero,bot.x + DD[0] ,bot.y + DD[1]);


}
