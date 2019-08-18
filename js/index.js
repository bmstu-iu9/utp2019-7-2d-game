'use strict';


var indi = new HeroClass(hero); // создание и инициализация объекта главный герой
// var bot = new BotClass(1);
//indi - имя главного героя
indi.width = 32;
indi.height = 64;

var curLevel = new LevelClass(lvl); //текущий уровень
botGenerate();
//var nextLevel = 0;
//var T = 0;
/* Парсинг уровня из map.js */

parseMap(maps[lvl],0,0);


/* Отрисовка динамических объектов */
function draw(){

      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
      ctx.drawImage(bg , 0 , 0);

      //Блоки размером по умолчанию
      for (var i = 0 ; i < blocks.length ; i++){
          if (blocks[i].id == 'G'){
              ctx.drawImage(gnd , blocks[i].x , blocks[i].y);
          } else if (blocks[i].id == 'S'){
              ctx.drawImage(spikes , blocks[i].x , blocks[i].y);
          } else if (blocks[i].id == 'F') {
              ctx.drawImage(fire , blocks[i].x , blocks[i].y);
          }
      }
      run(DD); //новый вариант анимации бега и прыжка (все вопросы и предложения к Александру Л)

      botRules(DD); //Жизнь ботов (все вопросы и предложения к Александру Л)


      // поздняя отрисовка блоков
      for (var i = 0 ; i < blocksAfter.length ; i++){
        if (blocksAfter[i].id == 'g') {
            ctx.drawImage(gnd , blocksAfter[i].x , blocksAfter[i].y);
        }
        if (blocksAfter[i].id == 'D') {
            ctx.drawImage(gnd , blocksAfter[i].x , blocksAfter[i].y);
        }
        if (blocksAfter[i].id == 'C') {
            ctx.drawImage(coin , blocksAfter[i].x , blocksAfter[i].y);
        }
      }



      ctx.strokeStyle = "white";
      ctx.font = 'bold 25px sans-serif';
      ctx.strokeText("Level: "+lvl+"   Coins: "+curLevel.currentCoins+" / "+curLevel.allCoins+" Hp: "+curLevel.hp, 40, 65);

      if (InBlock(indi,'D')) {  //проверка на дверь и переход на след Уровень
        if (lvl < maps.length-1) {
          NextLevel();
        } else {
          End();
        }

      }
}


//Отрисовка динамических объектов в игре
//Частота обновления 1мс
var interval = setInterval(draw , 1);
