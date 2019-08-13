'use strict';


var indi = new HeroClass(hero); // создание и инициализация объекта главный герой
// var bot = new BotClass(1);
//indi - имя главного героя
indi.width = 32;
indi.height = 64;

var curLevel = new LevelClass(1); //текущий уровень


/* Парсинг уровня из map.js */
parseMap(map);



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
        } else if (blocks[i].id == 'C') {
            ctx.drawImage(coin, blocks[i].x , blocks[i].y);  //нужно будет заменить на изображение монеты
            if ((blocks[i].x + 30 >= (indi.x + indi.dX)+indi.hero.width  && blocks[i].x - 30 <= (indi.x + indi.dX)+indi.hero.width/2) && (blocks[i].y + 30 >= (indi.y + indi.dY)+indi.hero.height/2  && blocks[i].y - 30 <= (indi.y + indi.dY)+indi.hero.height/2)) {  //если Инди дошел до монеты, то больше ее рисовать не нужно
              blocks[i].id='G';
              // blocks.slice(i, 1); //удаляем блок из массива
              // curLevel.currentCoins++;
              // i--;
            }
        }
    }
    // botRules()
    run(); //новый вариант анимации бега и прыжка (все вопросы и предложения к Александру Л)
    //Смещение по ординате




    ctx.strokeStyle = "white";
    ctx.font = 'bold 25px sans-serif';
    ctx.strokeText("Coins: "+curLevel.currentCoins+" / "+curLevel.allCoins, 20, 45);
    // if (curLevel.currentCoins==curLevel.allCoins) {
    //   alert("Уровень "+curLevel.number+" пройден");
    // }
}


//Отрисовка динамических объектов в игре
//Частота обновления 1мс
var interval = setInterval(draw , 1);
