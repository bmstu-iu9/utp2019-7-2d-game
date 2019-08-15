'use strict';
//indi - имя главного героя

let indi = new HeroClass(hero); // создание и инициализация объекта главный герой
indi.width = 32;
indi.height = 64;

let curLevel = new LevelClass(1); //текущий уровень
botGenerate();
let nextLevel = 0;
let T = 0;

parseMap(map); //Парсинг уровня из map.js

/* Отрисовка динамических объектов */

const draw = () => {
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
      ctx.drawImage(bg , 0 , 0);
      //Блоки размером по умолчанию
      for (let i = 0 ; i < blocks.length ; i++){
          if (blocks[i].id == 'G'){
              ctx.drawImage(gnd , blocks[i].x , blocks[i].y);
          } else if (blocks[i].id == 'S'){
              ctx.drawImage(spikes , blocks[i].x , blocks[i].y);
          } else if (blocks[i].id == 'F') {
              ctx.drawImage(fire , blocks[i].x , blocks[i].y);
          } else if (blocks[i].id == 'C') {
              ctx.drawImage(coin, blocks[i].x , blocks[i].y);  //нужно будет заменить на изображение монеты
          }
      }
      run(DD); //новый вариант анимации бега и прыжка (все вопросы и предложения к Александру Л)

      botRules(DD); //Жизнь ботов (все вопросы и предложения к Александру Л)

      // поздняя отрисовка блоков

      for (let i = 0 ; i < blocksAfter.length ; i++) {
        if (blocksAfter[i].id == 'g') {
            ctx.drawImage(gnd , blocksAfter[i].x , blocksAfter[i].y);
        }
      }

      ctx.strokeStyle = "white";
      ctx.font = 'bold 25px sans-serif';
      ctx.strokeText("Coins: "+curLevel.currentCoins+" / "+curLevel.allCoins, 20, 45);
      /* if (curLevel.currentCoins==curLevel.allCoins) {
         alert("Уровень "+curLevel.number+" пройден");
     }*/
}


/*Отрисовка динамических объектов в игре
Частота обновления 1мс*/

let interval = setInterval(draw , 1);
