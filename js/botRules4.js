const botRules4 = (bot) => {

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
    if (OnCeil(b) && b.heroDY > 0 ) {
      b.heroDY = 0;
    }
    b.y -= b.heroDY;
    if (! OnGround(b) && !OnFakeBlock(b)) {
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



  const ShootBot = (b) => {
    if ( (b.shootTime == b.shootTimeConst) && (Math.abs(b.y -indi.y) < 65) && (Math.abs(b.x -indi.x) < 900)) {
      shoot(b);
    }
    if (Math.abs(b.y -indi.y) < 70) {
      b.shootTime-- ;
    }
    if (b.shootTime <= 0) {
      b.shootTime = b.shootTimeConst;
    }
  }


  const kill = (bot) => {
    if ((Math.abs(bot.y -indi.y) < 200) && (Math.abs(bot.x -indi.x) < 900)) {

      if (indi.x > bot.x ) {
        bot.orientation = 'r'
      } else {
        bot.orientation = 'l'
      }
      bot.dN ++;
      if (bot.dN < 600) {
        moveU(bot);
        ShootBot(bot);
      } else if (bot.dN > 1500) {
        bot.dN = 0;
      } else if ((bot.dN > 700) && (bot.dN < 850)) {
        goBotX(bot,'l');
      } else if ((bot.dN > 1100) && (bot.dN < 1250)) {
        goBotX(bot,'r');
      } else {
        ShootBot(bot);
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
  kill(bot);
  Draw(bot);
}
