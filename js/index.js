'use strict';


let indi = new Hero(hero); // создание и инициализация объекта главный герой
// var bot = new BotClass(1);
//indi - имя главного героя

let doorLock = new LockClass(lockArr[lvl]);

let curLevel = new LevelClass(lvl); //текущий уровень
botGenerate();
/* Парсинг уровня из map.js */
characters.push(indi);
// map[0].replace('G','F');
parseMap(maps[lvl],0,0);


/* Отрисовка динамических объектов */
const draw = () => {

      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
      ctx.drawImage(bg , 0 , 0);

      //Блоки размером по умолчанию
      for (var i = 0 ; i < blocks.length ; i++){
          if (blocks[i].id == 'G'){
              ctx.drawImage(gnd, NN[0] * (blocks[i].x + FF[0]) ,NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
          } else if (blocks[i].id == 'F') {
              ctx.drawImage(fire ,NN[0] *  (blocks[i].x + FF[0]),NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
          } else if (blocks[i].id == ' ' || blocks[i].id == 'C' || blocks[i].id == 'S' || blocks[i].id == 'W' || blocks[i].id == 'L') {
              ctx.drawImage(background ,NN[0] *  (blocks[i].x + FF[0]),NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
          }
      }
      if (!freeCamera && !InBlock(indi,'D')) { 
        drawHero(); //новый вариант анимации бега и прыжка (все вопросы и предложения к Александру Л)
        bulletRules();
        // for (var i = 0; i < deathlist.length; i++) {
        //   for (var j = 0; j < bots.length; j++) {
        //     if ((bots[j].x == deathlist[i].x) && (bots[j].y == deathlist[i].y) )
        //     bots.splice(j,1);
        //   }
        // }
        for (var i = 0; i < characters.length; i++) {
          botRules(characters[i]);
        }
        // botRules1(); //Жизнь ботов (все вопросы и предложения к Александру Л)
        // botRules2();

      }else {
        if (freeCamera) {
          freeCameraRule();
        }
      }

      // поздняя отрисовка блоков
      for (var i = 0 ; i < blocksAfter.length ; i++){
        if (blocksAfter[i].id == 'g') {
            ctx.drawImage(gnd ,NN[0] *  (blocksAfter[i].x  + FF[0]),NN[1] *  (blocksAfter[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
        } else if (blocksAfter[i].id == 's'){
          ctx.drawImage(gnd ,NN[0] *  (blocksAfter[i].x  + FF[0]),NN[1] *  (blocksAfter[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
        } else if (blocksAfter[i].id == 'S'){
          ctx.drawImage(spikes ,NN[0] *  (blocksAfter[i].x  + FF[0]),NN[1] *  (blocksAfter[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
        } else if (blocksAfter[i].id == 'L') {
          blocksAfter[i].posision = envN[0];
          ctx.drawImage(lava , (((~~envN[0]) * 32) % 96) ,0 ,32 ,32 , NN[0] * (blocksAfter[i].x  +  FF[0]),NN[1] * (blocksAfter[i].y + FF[1]) ,NN[0] * 32 ,NN[1] * 32 );
          envN[0] += 1.0025;
        } else if (blocksAfter[i].id == 'W') {
          blocksAfter[i].posision = envN[1];
          ctx.drawImage(water , ((((~~envN[1])) * 32) % 96) ,0 ,32 ,32 , NN[0] * (blocksAfter[i].x  +  FF[0]),NN[1] * (blocksAfter[i].y + FF[1]) ,NN[0] * 32 ,NN[1] * 32 );
          envN[1] += 1.0025;
        } else if (blocksAfter[i].id == 'D'){
          ctx.drawImage(gnd ,NN[0] *  (blocksAfter[i].x  + FF[0]),NN[1] *  (blocksAfter[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
        } else if (blocksAfter[i].id == 'C'){
          ctx.drawImage(coin ,NN[0] *  (blocksAfter[i].x  + FF[0]),NN[1] *  (blocksAfter[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
        }
      }



      ctx.strokeStyle = "white";
      ctx.font = 'bold 25px sans-serif';
      ctx.strokeText("Level: "+lvl+"   Coins: "+curLevel.currentCoins+" / "+curLevel.allCoins+"  Hp: "+curLevel.hp, 40, 65);

      if (InBlock(indi,'D')) {  //проверка на дверь и переход на след Уровень
        Lock();
        // if (curLevel.doorOpen) {
        //   if (lvl < maps.length-1) {
        //     NextLevel();
        //   } else {
        //     End();
        //     }
        // }
      }
      death();
      requestAnimationFrame(draw);

}


//Отрисовка динамических объектов в игре
//Частота обновления 1мс
//var interval = setInterval(draw , 1);
draw();
