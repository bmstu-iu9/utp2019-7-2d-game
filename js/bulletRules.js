const bulletRules = () => {
  for (var k = 0; k < bullets.length; k++) {
    let j = ~~((bullets[k].x )  / 32); //Целочисленное деление )) Нашел в инете
    let i = ~~((bullets[k].y )  / 32);
    let stop = false;
    if ((map[i][j] == 'G') || (map[i][j] == 'g')) {
      if (map[i][j] == 'g') {
        map[i][j] = ' ';
        // stringChange(i,j,' ');
        blocks[i * map[0].length + j].id = ' '
        BlockChange(bullets[k],bullets[k].x,bullets[k].y,'g',' ',1);
      }
      bullets.splice(k , 1);
        // blocksAfter[i * map[0].length + j].id = ' ' // fix it!

    } else {
      for (var u = 0; u < characters.length; u++) {
        if ((characters[u].x <= bullets[k].x) && (characters[u].x + characters[u].width >= bullets[k].x) && (characters[u].y <= bullets[k].y) && (characters[u].y + characters[u].height >= bullets[k].y)){
            let xp = characters[u].xp;
            characters[u].xp -= bullets[k].power;
            bullets[k].xp -= xp;
            if (characters[u].xp <= 0) {
              deathlist.push(characters[u].xp);
              characters.splice(u,1);
            }
            if (bullets[k].xp <= 0) {
              bullets.splice(k , 1);
              stop = true;
            }
          }
        }
          if ( !stop ) {
            bullets[k].x += bullets[k].speed;
            if (bullets[k].speed > 0) {
              ctx.drawImage(bullets[k].photoR,NN[0] * (bullets[k].x - 3 + DD[0] + FF[0]),NN[1] * (bullets[k].y + 1 + DD[1] + FF[1]) ,NN[0] * 6 ,NN[1] * 2); // анимация бега    bot.posision += 0.03;
              // ctx.drawImage(coin,NN[0] * (bullets[k].x - 3 + DD[0] + FF[0]),NN[1] * (bullets[k].y + 1 + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 32); // анимация бега    bot.posision += 0.03;
            } else {
              ctx.drawImage(bullets[k].photoL ,NN[0] * (bullets[k].x - 3 + DD[0] + FF[0]),NN[1] * (bullets[k].y + 1 + DD[1] + FF[1]) ,NN[0] * 6 ,NN[1] * 2); // анимация бега    bot.posision += 0.03;
              // ctx.drawImage(coin,NN[0] * (bullets[k].x - 3 + DD[0] + FF[0]),NN[1] * (bullets[k].y + 1 + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 32); // анимация бега    bot.posision += 0.03;
            }
          }
        }
      }

  }
