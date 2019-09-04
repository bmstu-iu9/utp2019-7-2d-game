const botRules2 = (bot) => {

  /* фуекция смещения по X */
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

  /* фуекция смещения по Y+ */
  const moveU = (b) => {
    if (OnGround(b) && !OnCeil(b)) {
      b.heroDY = 6;
    }
  }

  /* фуекция смещения по Y- */
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

  /* отрисовка (изучаем названия изображений) */
  const Draw = (bot) => {
    bot.dY = bot.heroDY;
    if ((bot.orientation == 'r') && (bot.dX == 0) && (bot.dY == 0)) {
      bot.texture.src = "images/enemies/mummy/mummyR.png";
      ctx.drawImage(bot.texture ,NN[0] * (bot.x + DD[0] + FF[0]) ,NN[1] * (bot.y + DD[1] + FF[1]) , NN[0] * 32, NN[1] * 64);
    } else if ((bot.orientation == 'l') && (bot.dX == 0) && (bot.dY == 0))  {
      bot.texture.src = "images/enemies/mummy/mummyL.png";
      ctx.drawImage(bot.texture ,NN[0] * (bot.x + DD[0] + FF[0]) ,NN[1] * (bot.y + DD[1] + FF[1]) , NN[0] * 32, NN[1] * 64);
    } else if ((bot.orientation == 'l')  && (bot.dY != 0)) {
      bot.texture.src = "images//enemies/mummy/mummyWalkL.png";
      ctx.drawImage(bot.texture , (((~~bot.posision) * 44) % 264) ,0 ,44 ,88 , NN[0] * (bot.x + DD[0] + FF[0]),NN[1] * (bot.y + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 64 );
      bot.posision += 0.13;
    } else if ((bot.orientation == 'r')  && (bot.dY != 0)) {
      bot.texture.src = "images//enemies/mummy/mummyWalkR.png";
      ctx.drawImage(bot.texture , (((~~bot.posision) * 44) % 264) ,0 ,44 ,88 , NN[0] * (bot.x + DD[0] + FF[0]),NN[1] * (bot.y + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 64 );
      bot.posision += 0.13;
    }  else if ((bot.orientation == 'l' ) && (bot.dX != 0) && (bot.dY == 0)) {
      bot.texture.src = "images/enemies/mummy/mummyWalkL.png";
      ctx.drawImage(bot.texture , (((~~bot.posision) * 44) % 264) ,0 ,44 ,88 ,NN[0] * (bot.x + DD[0] + FF[0]),NN[1] * (bot.y + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 64 ); // анимация бега    bot.posision += 0.03;
      bot.posision += 0.13;
    } else if ((bot.orientation == 'r' ) && (bot.dX != 0) && (bot.dY == 0)) {
      bot.texture.src = "images/enemies/mummy/mummyWalkR.png";
      ctx.drawImage(bot.texture , (((~~bot.posision) * 44) % 264) ,0 ,44 ,88 ,NN[0] * (bot.x + DD[0] + FF[0]),NN[1] * (bot.y + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 64 ); // анимация бега    bot.posision += 0.03;
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
  moveD(bot);
  Find(bot);
  Draw(bot);
}
