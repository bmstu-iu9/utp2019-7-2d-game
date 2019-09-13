const Boss1 = (Object) => {


  let m = bossMaps[lvl];
  let j = ~~((Object.x ) / 32); //Целочисленное деление )) Нашел в инете
  let i = ~~((Object.y + 63) / 32)

  const DrawBoss1 = (bot) => {
    if ((bot.orientation == 'r') && (bot.dX == 0) ) {
      bot.texture.src = "images/hero/HeroNegativR.png";
      ctx.drawImage(bot.texture,NN[0] * (bot.x + DD[0] + FF[0]) ,NN[1] * (bot.y + DD[1] + FF[1]) , NN[0] * 32, NN[1] * 64);
    } else if ((bot.orientation == 'l') && (bot.dX == 0) )  {
      bot.texture.src = "images/hero/HeroNegativL.png";
      ctx.drawImage(bot.texture,NN[0] * (bot.x + DD[0] + FF[0]) ,NN[1] * (bot.y + DD[1] + FF[1]) , NN[0] * 32, NN[1] * 64);
    } else if ((bot.orientation == 'l')  && (bot.heroDY != 0)) {
      bot.texture.src = "images/hero/runAnimNegativL.png";
      ctx.drawImage(bot.texture , (((~~bot.posision) * 66) % 396) ,0 ,66 ,88 ,NN[0] * (bot.x + DD[0] + FF[0]),NN[1] * (bot.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 ); // анимация бега
      bot.posision += 0.13;
    } else if ((bot.orientation == 'r')  && (bot.heroDY != 0)) {
      bot.texture.src = "images/hero/runAnimNegativR.png";
      ctx.drawImage(bot.texture , (((~~bot.posision) * 66) % 396) ,0 ,66 ,88 ,NN[0] * (bot.x + DD[0] + FF[0]),NN[1] * (bot.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 ); // анимация бега
      bot.posision += 0.13;
    }  else if ((bot.orientation == 'l' ) && (bot.dX != 0) && (bot.heroDY == 0)) {
      bot.texture.src = "images/hero/runAnimNegativL.png";
      ctx.drawImage(bot.texture , (((~~bot.posision) * 66) % 396) ,0 ,66 ,88 ,NN[0] * (bot.x + DD[0] + FF[0]),NN[1] * (bot.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 ); // анимация бега
      bot.posision += 0.13;
    } else if ((bot.orientation == 'r' ) && (bot.dX != 0) && (bot.heroDY == 0)) {
      bot.texture.src = "images/hero/runAnimNegativR.png";
      ctx.drawImage(bot.texture , (((~~bot.posision) * 66) % 396) ,0 ,66 ,88 ,NN[0] * (bot.x + DD[0] + FF[0]),NN[1] * (bot.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 ); // анимация бега
      bot.posision += 0.13;
    }
  }

  function RuleBoss1(b) {
    if (m[i][j] == '<') {
      b.x -= b.speed ;
      b.dX = -b.speed;
      b.dY = 0;
      b.orientation = 'l';
    } else if (m[i][j] == '>') {
      b.x += b.speed ;
      b.dX = b.speed;
      b.dY = 0;
      b.orientation = 'r';
    } else if (m[i][j] == '^') {
      b.y -= b.speed;
      b.dY =  -b.speed;
      b.dX = 0;
    }else if (m[i][j] == '|') {
      b.y += b.speed ;
      b.dY = b.speed;
      b.dX = 0;
    }else if (m[i][j] == '0' || m[i][j] == '*'  ) {
      b.y += b.dY;
      b.x += b.dX;
    }else  {
      b.dX = 0;
      b.dY = 0;
    }
  }

  const ShootBoss1 = (b) => {
    if (b.dX == 0) {
      if (b.x - indi.x > 0) {
        b.orientation = 'l';
      } else {
        b.orientation = 'r';
      }
    }
    if ( (b.shootTime == b.shootTimeConst) && (Math.abs(b.y -indi.y) < 500) && (Math.abs(b.x -indi.x) < 1000)) {
      shoot(b);
      if (bullets.length > 0 && Math.abs(b.x -indi.x) != 0) {
        let s = - Math.abs(bullets[bullets.length - 1].speed);
        let dy = (s * (b.y - (indi.y + 20)))  / Math.abs(b.x -indi.x)   ;
        if (dy >= 15 ) {
          dy = 15;
        }
        if (dy <= -15 ) {
          dy = -15;
        }
        bullets[bullets.length - 1].dY = dy;
      }
    }
    if (Math.abs(b.y -indi.y) < 500) {
      b.shootTime-- ;
    }
    if (b.shootTime <= 0) {
      b.shootTime = b.shootTimeConst;
    }
  }




  RuleBoss1(Object);
  DrawBoss1(Object);
  ShootBoss1(Object);


}
