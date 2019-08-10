'use strict';


var indi = new HeroClass(hero); // создание и инициализация объекта главный герой
//indi - имя главного героя

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
            ctx.drawImage(fire , blocks[i].x , blocks[i].y);  //нужно будет заменить на изображение монеты
            if ((blocks[i].x + 10 >= indi.x  && blocks[i].x - 10 <= indi.x) && (blocks[i].y + 10 >= indi.y  || blocks[i].y - 10 <= indi.y)) {  //если Инди дошел до монеты, то больше ее рисовать не нужно
              blocks.splice(i, 1); //удаляем блок из массива
              curLevel.currentCoins++;
            }
        }
    }

    physics();

 

    //Если персонаж не на земле уменьшать гравитацию на 0.1
    //Можно эксперементировать со значениями
    if(!indi.OnGround){
    	var j = ~~((indi.x + 40) / 32); //Целочисленное деление )) Нашел в инете
    	var i = ~~((indi.y + 80) / 32);
    	if (map[i - 2][j] != 'G'){
        	indi.heroDY -= 0.1;
    	}else indi.heroDY = -0.1;
    }

    //Смещение по ординате
    indi.y -= indi.heroDY;

    ctx.drawImage(indi.hero , indi.x , indi.y , 80 , 80);

    ctx.strokeStyle = "white";
    ctx.font = 'bold 25px sans-serif';
    ctx.strokeText("Coins: "+curLevel.currentCoins+" / "+curLevel.allCoins, 20, 45);
    //ctx.strokeText("Y: "+indi.y, 20, 200);
    // if (curLevel.currentCoins==curLevel.allCoins) {
    //   alert("Уровень "+curLevel.number+" пройден");
    // }
}


//Отрисовка динамических объектов в игре
//Частота обновления 1мс
var interval = setInterval(draw , 1);
