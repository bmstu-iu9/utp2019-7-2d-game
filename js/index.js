'use strict';


const indi = new HeroClass(hero); // создание и инициализация объекта главный герой
// var bot = new BotClass(1);
//indi - имя главного героя
indi.width = 32;
indi.height = 64;

const curLevel = new LevelClass(1); //текущий уровень
botGenerate();
let nextLevel = 0;
let T = 0;
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
              ctx.drawImage(gnd ,NN[0] * (blocks[i].x + FF[0]) ,NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
          }
          else if (blocks[i].id == 'F') {
              ctx.drawImage(fire ,NN[0] *  (blocks[i].x + FF[0]),NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
          }
      }
      if (!freeCamera) {
        run(DD); //новый вариант анимации бега и прыжка (все вопросы и предложения к Александру Л)

        botRules(DD); //Жизнь ботов (все вопросы и предложения к Александру Л)
      }else {
        freeCameraRule();
      }

      // поздняя отрисовка блоков
      for (var i = 0 ; i < blocksAfter.length ; i++){
        if (blocksAfter[i].id == 'g') {
            ctx.drawImage(gnd ,NN[0] *  (blocksAfter[i].x  + FF[0]),NN[1] *  (blocksAfter[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
        } else if (blocksAfter[i].id == 's'){
          ctx.drawImage(gnd ,NN[0] *  (blocksAfter[i].x  + FF[0]),NN[1] *  (blocksAfter[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
        } else if (blocksAfter[i].id == 'S'){
          ctx.drawImage(spikes ,NN[0] *  (blocksAfter[i].x  + FF[0]),NN[1] *  (blocksAfter[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
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
