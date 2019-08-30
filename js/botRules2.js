const botRules2 = (bot) => {
  // photo = new Image();
  // switch (bot.number) {
  //   case 1:
  //     photo.src = "images/enemies/bot1R.png";
  //     break;
  //   case 2:
  //     photo.src = "images/enemies/bot2R.png";
  //     break;
  //   case 3:
  //     photo.src = "images/enemies/bot3R.png";
  //     break;
  //   default:
  //     photo.src = "images/enemies/bot1R.png";
  // }

  // bot.hero.src = "images/enemies/mommy2left.png";

/*смещение бота*/

  const moveX = (b,d) => {
    b.orientation = d;
    if (b.orientation == 'l') {
      b.x -= b.speed;
      b.dX = b.speed;
    } else {
      b.x += b.speed;
      b.dX = b.speed;
    }
  }
  // const moveR = (b) => {
  //   b.x += 0.3;
  // }
  const moveU = (b) => {
    if (OnGround(b) && !OnCeil(b)) {
      b.heroDY = 6;
    }
  }

  const moveD = (b) => {
    if (OnCeil(b) && b.heroDY > 0) {
      b.heroDY = 0;
    }
    b.y -= b.heroDY;
    if (! OnGround(b)) {
      b.heroDY -= 0.25;
    } else {
      b.heroDY = 0;
    }
  }

/*смещение "до конца"*/

const goBotX = (bot,d) => {
  bot.orientation = d;
  bot.dX = 0;
  if (d == 'l') {
    if (!OnLeft(bot)) {
      moveX(bot,d);
    }
  } else {
    if (!OnRight(bot)) {
      moveX(bot,d);
    }
  }
}


const Draw = (bot) => {
  moveD(bot);
  Find(bot);
  bot.dY = bot.heroDY;
  if ((bot.orientation == 'r') && (bot.dX == 0) && (bot.dY == 0)) {
    bot.hero.src = "images/hero/HeroR.png";
    ctx.drawImage(bot.hero,NN[0] * (bot.x + DD[0] + FF[0]) ,NN[1] * (bot.y + DD[1] + FF[1]) , NN[0] * 32, NN[1] * 64);
  } else if ((bot.orientation == 'l') && (bot.dX == 0) && (bot.dY == 0))  {
    bot.hero.src = "images/hero/HeroL.png";
    ctx.drawImage(bot.hero,NN[0] * (bot.x + DD[0] + FF[0]) ,NN[1] * (bot.y + DD[1] + FF[1]) , NN[0] * 32, NN[1] * 64);
  } else if ((bot.orientation == 'l')  && (bot.dY != 0)) {
    bot.hero.src = "images/hero/fallAnimL.png";
    ctx.drawImage(bot.hero , (((~~bot.posision) * 66) % 264) ,0 ,66 ,88 , NN[0] * (bot.x + DD[0] + FF[0]),NN[1] * (bot.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 );
    bot.posision += 0.13;
  } else if ((bot.orientation == 'r')  && (bot.dY != 0)) {
    bot.hero.src = "images/hero/fallAnimR.png";
    ctx.drawImage(bot.hero , (((~~bot.posision) * 66) % 264) ,0 ,66 ,88 , NN[0] * (bot.x + DD[0] + FF[0]),NN[1] * (bot.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 );
    bot.posision += 0.13;
  }  else if ((bot.orientation == 'l' ) && (bot.dX != 0) && (bot.dY == 0)) {
    bot.hero.src = "images/hero/runAnimL.png";
    ctx.drawImage(bot.hero , (((~~bot.posision) * 66) % 396) ,0 ,66 ,88 ,NN[0] * (bot.x + DD[0] + FF[0]),NN[1] * (bot.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 ); // анимация бега    bot.posision += 0.13;
    bot.posision += 0.13;
  } else if ((bot.orientation == 'r' ) && (bot.dX != 0) && (bot.dY == 0)) {
    bot.hero.src = "images/hero/runAnimR.png";
    ctx.drawImage(bot.hero , (((~~bot.posision) * 66) % 396) ,0 ,66 ,88 ,NN[0] * (bot.x + DD[0] + FF[0]),NN[1] * (bot.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 ); // анимация бега    bot.posision += 0.13;
    bot.posision += 0.13;
  }

}



/*поиск главного персонажа*/

const Find = (bot) => {
  if (Math.abs(indi.x - bot.x ) > 50) {
    if (indi.x > bot.x) {
      goBotX(bot,'r');
    } else {
      goBotX(bot,'l');
    }
  } else {
    bot.dX = 0;
  }
}

/* ОСНОВА */

Draw(bot);

/* отрисовка бота*/

// ctx.drawImage(bot.hero,NN[0] * (bot.x + DD[0] + FF[0]) ,NN[1] * (bot.y + DD[1] + FF[1]) , NN[0] * 32, NN[1] * 64);
}
