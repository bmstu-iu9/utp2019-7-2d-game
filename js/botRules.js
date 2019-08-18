const botRules = (DD) => {
  bot = bots[0];
  photo = new Image();
  switch (bot.number) {
    case 1:
      photo.src = "images/enemies/bot1R.png";
      break;
    case 2:
      photo.src = "images/enemies/bot2R.png";
      break;
    case 3:
      photo.src = "images/enemies/bot3R.png";
      break;
    default:
      photo.src = "images/enemies/bot1R.png";
  }

  bot.hero = photo;

/*смещение бота*/

  const moveL = (b) => {
    b.x -= 0.3;
  }
  const moveR = (b) => {
    b.x += 0.3;
  }
  const moveU = (b) => {
    if (OnGround(b) && !OnCeil(b)) {
      b.heroDY = 2;
    }
  }
  const moveD = (b) => {
    if (OnCeil(b) && b.heroDY > 0) {
      b.heroDY = 0;
    }
    b.y -= b.heroDY;
    if (! OnGround(b)) {
      b.heroDY -= 0.02;
    } else {
      b.heroDY = 0;
    }
  }

/*смещение "до конца"*/

const goBotLeft = () => {
  if (!OnLeft(bot)) {
    moveL(bot);
  }
  if ( OnLeft(bot) ) {
      moveU(bot);
  }
}
const goBotRight = () => {
  if (!OnRight(bot)) {
    moveR(bot);
  }
  if (OnRight(bot) ) {
      moveU(bot);
  }
}

/*поиск главного персонажа*/

const Find = () => {
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

ctx.drawImage(bot.hero,NN[0] * (bot.x + DD[0] + FF[0]) ,NN[1] * (bot.y + DD[1] + FF[1]) , NN[0] * 32, NN[1] * 64);
}
