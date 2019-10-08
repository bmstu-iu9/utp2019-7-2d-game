'use strict';


/* indi - имя главного героя */
let indi = new Hero(hero); // создание и инициализация объекта главный герой
characters.push(indi); // добавляем его в спосок персонажей

/* создаем замок */
let doorLock = new LockClass(lockArr[lvl]);

/* текущий уровень*/
let curLevel = new LevelClass(lvl);

/* вызываем генератор ботов */
botGenerate();


/* Парсинг уровня из map.js */
parseMap(maps[lvl],0,0);
parseBossMap(bossMaps[lvl],0,0);
let tt = 0;
let xP = 0, yP = 0;

/* Отрисовка динамических объектов */
const draw = () => {
      tt += 17;
      ctx.clearRect(0 , 0 , canvas.width , canvas.height); // стираем все
      ctx.drawImage(bg , 0 , 0); // рисуем фон
      // death();
      for (var i = 0 ; i < blocks.length ; i++){
        if (blocks[i].id == ' ' || blocks[i].id == 'C' || blocks[i].id == 'a'  || blocks[i].id == 'S' || blocks[i].id == 'W' || blocks[i].id == 'L') {
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
            envN[0] += 1.001;
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
        // for (var i = 0; i < BossArr.length; i++) {
        //   Boss1(BossArr[i]);
        // }
        bulletRules(); // отрисовываем пули и тд


        for (var i = 0; i < characters.length; i++) { // проходим по массиву ботов
          botRules(characters[i]);  // запускаем выбор поведения и отрисовку
          blockCheck(characters[i],i);
        }

      }else {
        if (freeCamera) {
          freeCameraRule(); // свободная камера
        }
      }



      // поздняя отрисовка блоков
      // for (var i = 0 ; i < blocks.length ; i++){
      //
      // }



      /* Отрисовка надписей */
      ctx.strokeStyle = "white";
      ctx.font = 'bold 25px sans-serif';
      if (indi.hp < 0) {
        indi.hp = 0;
      }
      ctx.strokeText("Level: " + lvl + "   Coins: " + curLevel.currentCoins + " / " + curLevel.allCoins + "  Hp: " + indi.hp, 40, 65);
      ctx.strokeText("Time: " + (tt   / 1000)  , 40, 90);
      inventoryAnimation();
      // inouy("шифрование",10 * 32,4 * 32,0);
      if (PPressed) {
        inouyBack(indi.x,indi.y,~~(tt / 60000));
      }

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

      if (InBlock(indi.x, indi.y, 'D') && curLevel.doorOpen) {
        let c = [];
        c[0] = ctx.shadowColor;
        c[1] = ctx.strokeStyle;
        c[2] = ctx.fillStyle;
        c[3] = ctx.shadowOffsetX;
        c[4] = ctx.shadowOffsetY;
        c[5] = ctx.shadowBlur;
        c[6] = ctx.font;
        ctx.strokeStyle = "red"
        ctx.fillStyle = "orange"
        ctx.shadowColor = "purple";
        ctx.shadowOffsetX = 7;
        ctx.shadowOffsetY = 7;
        ctx.shadowBlur = 3;
        ctx.font = 'bold 60px serif';
        ctx.strokeText("Собери все монеты", 500, 100);
        ctx.fillText("Собери все монеты", 500, 100)
        ctx.shadowColor = c[0];
        ctx.strokeStyle = c[1]
        ctx.fillStyle =  c[2];
        ctx.shadowOffsetX = c[3];
        ctx.shadowOffsetY = c[4];
        ctx.shadowBlur = c[5];
        ctx.font = c[6];
      }
      if (KPressed) {
        ctx.strokeText("x " + (~~((indi.x + indi.width / 2 ) / 32) + ~~xP) + " y " + (~~((indi.y + 10) / 32) + ~~yP) , 50 , 130)
        if (XPressed && plusPressed) {
          xP+= 0.2;
        }
        if (YPressed && plusPressed) {
          yP+= 0.2;
        }
        if (XPressed && minusPressed) {
          xP-= 0.2;
        }
        if (YPressed && minusPressed) {
          yP-= 0.2;
        }
        if (TPressed) {
          if ((~~((indi.x + indi.width / 2 ) / 32) + ~~xP) * 32 > 0) {
            indi.x = (~~((indi.x + indi.width / 2 ) / 32) + ~~xP) * 32;
          }
          if ((~~((indi.y + 10) / 32) + ~~yP) * 32 > 0) {
            indi.y = (~~((indi.y + 10) / 32) + ~~yP) * 32;
          }
          TPressed = false;
          XPressed = false;
          YPressed = false;
          yP = 0;
          xP = 0;
        }
        if (MousePressed) {
          xP = (~~(((Mouse[0] ) / NN[0] - DD[0] - FF[0]) / 32) - ~~((indi.x + indi.width / 2 ) / 32)) //- ~~((indi.x + indi.width / 2 ) / 32)
          yP = ~~(((Mouse[1] + 10) / NN[1] - DD[1] - FF[1]) / 32)  - ~~((indi.y + 10) / 32) //- ~~((indi.y + 10) / 32)
          indi.x = (~~((indi.x + indi.width / 2 ) / 32) + ~~xP) * 32;
          indi.y = (~~((indi.y + 10) / 32) + ~~yP) * 32;
          yP = 0;
          xP = 0;
          MousePressed = false;
        }
      }

      if (XPressed && YPressed && PPressed && KPressed ) {
        if (plusPressed) {

          plusPressed = false;
          if (lvl < maps.length - 1) {
            NextLevel();
          }
        }
        if (minusPressed) {
          minusPressed = false;
          PrevLevel();
        }
      }

      /* Отрисовка смерти */


      //
      requestAnimationFrame(draw);
      ReadTextFile();
}


//Отрисовка динамических объектов в игре
//Частота обновления 1мс
// var interval = setInterval(draw , 1);
draw();
