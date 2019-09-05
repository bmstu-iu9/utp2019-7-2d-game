const drawMenu = () => {
  ctx.clearRect(0 , 0 , canvas.width , canvas.height); // стираем все
  ctx.drawImage(texture, 0, 0, canvas.width, canvas.height);
  if (spacePressed){
    scene = 1;
  }
}


/* Отрисовка динамических объектов */
const drawGame = () => {
      ctx.clearRect(0 , 0 , canvas.width , canvas.height); // стираем все
      ctx.drawImage(bg , 0 , 0); // рисуем фон
      for (var i = 0 ; i < blocks.length ; i++){
        if (blocks[i].id == ' ' || blocks[i].id == 'C' || blocks[i].id == 'S' || blocks[i].id == 'W' || blocks[i].id == 'L') {
            ctx.drawImage(background ,NN[0] *  (blocks[i].x + FF[0]),NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
        } else if (blocks[i].id == 'F') {
            ctx.drawImage(fire ,NN[0] *  (blocks[i].x + FF[0]),NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
        }
      }
      death();
      for (var i = 0 ; i < blocks.length ; i++){
          if (blocks[i].id == 'G'){
              ctx.drawImage(gnd, NN[0] * (blocks[i].x + FF[0]) ,NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
          } else if (blocks[i].id == 'D'){
            if (curLevel.allCoins != curLevel.currentCoins) {
              ctx.drawImage(doorClsd ,NN[0] *  (blocks[i].x  + FF[0]),NN[1] *  (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 64);
            } else {
              ctx.drawImage(doorOpn ,NN[0] *  (blocks[i].x  + FF[0]),NN[1] *  (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 64);
            }
          } else if (blocks[i].id == 'g') {
              ctx.drawImage(gnd ,NN[0] *  (blocks[i].x  + FF[0]),NN[1] *  (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
          } else if (blocks[i].id == 's'){
            ctx.drawImage(gnd ,NN[0] *  (blocks[i].x  + FF[0]),NN[1] *  (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
          } else if (blocks[i].id == 'S'){
            ctx.drawImage(spikes ,NN[0] *  (blocks[i].x  + FF[0]),NN[1] *  (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
          } else if (blocks[i].id == 'L') {
            blocks[i].posision = envN[0];
            ctx.drawImage(lava , (((~~envN[0]) * 32) % 96) ,0 ,32 ,32 , NN[0] * (blocks[i].x  +  FF[0]),NN[1] * (blocks[i].y + FF[1]) ,NN[0] * 32 ,NN[1] * 32 );
            envN[0] += 1.0025;
          } else if (blocks[i].id == 'W') {
            blocks[i].posision = envN[1];
            ctx.drawImage(water , ((((~~envN[1])) * 32) % 96) ,0 ,32 ,32 , NN[0] * (blocks[i].x  +  FF[0]),NN[1] * (blocks[i].y + FF[1]) ,NN[0] * 32 ,NN[1] * 32 );
            envN[1] += 1.0025;
          }  else if (blocks[i].id == 'C'){
            ctx.drawImage(coin ,NN[0] *  (blocks[i].x  + FF[0]),NN[1] *  (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
          }

      }


      chestRules();
      /* выбор между отрисовками  */
      if ((!freeCamera && (!InBlock(indi.x, indi.y, 'D') )) || (!freeCamera && InBlock(indi.x, indi.y, 'D') && curLevel.doorOpen)) {
        if (indi.hp > 0) {
          drawHero(); // отрисовываем персонажа
        }
        bulletRules(); // отрисовываем пули и тд
        for (var i = 0; i < characters.length; i++) { // проходим по массиву ботов
          botRules(characters[i]);  // запускаем выбор поведения и отрисовку
          blockCheck(characters[i],i);
        }
      } else {
        if (freeCamera) {
          freeCameraRule(); // свободная камера
        }
      }
      /* Отрисовка надписей */
      ctx.strokeStyle = "white";
      ctx.font = 'bold 25px sans-serif';
      ctx.strokeText("Level: " + lvl + "   Coins: " + curLevel.currentCoins + " / " + curLevel.allCoins + "  Hp: " + indi.hp, 40, 65);
      inventoryAnimation();

      /* вызов замка */
      if (InBlock(indi.x, indi.y, 'D')) {  //проверка на дверь и переход на след Уровень
        if (curLevel.doorOpen) {
          if (curLevel.currentCoins == curLevel.allCoins) {
            if (lvl < maps.length - 1) {
              NextLevel();
            } else {
              End();
            }
          }
        } else {
          Lock();
        }
      }

      //requestAnimationFrame(draw);
}
