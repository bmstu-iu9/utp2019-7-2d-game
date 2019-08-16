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
parseMap(map,0,0);


/* Отрисовка динамических объектов */
const draw = () => {
    // if (nextLevel == Level) {
    //   T = 0
    //   blocks = [];
    //   parseMap(map,Level * 1280,Level * 720);
    //   nextLevel++;
    // }

    // if (T < 100) {
    //   ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    //   T++;
    // } else {


      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
      ctx.drawImage(bg , 0 , 0);

      //Блоки размером по умолчанию
      for (var i = 0 ; i < blocks.length ; i++){
          if (blocks[i].id == 'G'){
              ctx.drawImage(gnd ,NN[0] * (blocks[i].x + FF[0]) ,NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
          }
          // else if (blocks[i].id == 'S'){
          //     ctx.drawImage(spikes ,NN[0] *  (blocks[i].x + FF[0]) ,NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
          // }
          else if (blocks[i].id == 'F') {
              ctx.drawImage(fire ,NN[0] *  (blocks[i].x + FF[0]),NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
          } else if (blocks[i].id == 'C') {
              ctx.drawImage(coin,NN[0] *  (blocks[i].x  + FF[0]),NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);  //нужно будет заменить на изображение монеты
              // if ((blocks[i].x + 30 >= (indi.x + indi.dX)+indi.hero.width  && blocks[i].x - 30 <= (indi.x + indi.dX)+indi.hero.width/2) && (blocks[i].y + 30 >= (indi.y + indi.dY)+indi.hero.height/2  && blocks[i].y - 30 <= (indi.y + indi.dY)+indi.hero.height/2)) {  //если Инди дошел до монеты, то больше ее рисовать не нужно
                // blocks[i].id='G';
                // blocks.slice(i, 1); //удаляем блок из массива
                // curLevel.currentCoins++;
                // i--;
              // }
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
        }
      }


      ctx.strokeStyle = "white";
      ctx.font = 'bold 25px sans-serif';
      ctx.strokeText("Coins: "+curLevel.currentCoins+" / "+curLevel.allCoins, 20, 45);

      // if (curLevel.currentCoins==curLevel.allCoins) {
      //   alert("Уровень "+curLevel.number+" пройден");
    // }
  // }
}


//Отрисовка динамических объектов в игре
//Частота обновления 1мс
var interval = setInterval(draw , 1);
