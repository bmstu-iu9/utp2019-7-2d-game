const bulletRules = () => {
  for (var k = 0; k < bullets.length; k++) {
    let j = ~~((bullets[k].x )  / 32); //Целочисленное деление )) Нашел в инете
    let i = ~~((bullets[k].y )  / 32); //Целочисленное деление )) Нашел в инете


    /* взаимодействие с блоками земли и не только */
    if ((map[i][j] == 'G') || (map[i][j] == 'g')) {
      if (map[i][j] == 'g') {  // разбиваем фейк блоки
        stringChange(i,j," ");  // смена блока на карте
        blocks[i * map[0].length + j].id = ' ' // смена блока в массиве
        BlockChange(bullets[k],bullets[k].x,bullets[k].y,'g',' ',1); // смена блока в массиве по коду
        bullets[k].hp -= 100;
      }

      if (map[i][j] == 'G') {
        bullets[k].hp = 0;
      }

      if (bullets[k].hp <= 0) {
        bullets.splice(k , 1); // удаляем пулю
      }
    }

    /* взаимодействие с ботами  и не только */
    for (var u = 0; u < characters.length; u++) {
      if (bullets[k] != undefined){
        if ((characters[u].x <= bullets[k].x) && (characters[u].x + characters[u].width >= bullets[k].x) && (characters[u].y <= bullets[k].y) && (characters[u].y + characters[u].height >= bullets[k].y)){
            let hp = characters[u].hp; // запоминаем здоровье
            characters[u].hp -= bullets[k].power; // вычитаем из него урон
            bullets[k].hp -= hp; // снимаем очки прочности пули
            if (characters[u].hp <= 0) {
              deathlist.push(characters[u]); // добавляем в список смерти
              characters.splice(u,1); // удаляем из персонажей
            }
          }
            if (bullets[k].hp <= 0) {
              bullets.splice(k , 1); // удаляем пулю
            }
          }
        }

        /* отрисовка пули */
        if (bullets[k] != undefined){
          bullets[k].x += bullets[k].speed;  // смещение пули
          if (bullets[k].speed > 0) {
            ctx.drawImage(bullets[k].photoR,NN[0] * (bullets[k].x - 3 + DD[0] + FF[0]),NN[1] * (bullets[k].y + 1 + DD[1] + FF[1]) ,NN[0] * 6 ,NN[1] * 2); // анимация бега    bot.posision += 0.03;
          } else {
            ctx.drawImage(bullets[k].photoL ,NN[0] * (bullets[k].x - 3 + DD[0] + FF[0]),NN[1] * (bullets[k].y + 1 + DD[1] + FF[1]) ,NN[0] * 6 ,NN[1] * 2); // анимация бега    bot.posision += 0.03;
          }
        }
      }
  }
