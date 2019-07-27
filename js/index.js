'use strict';

/* Канвас и контекст 2D */
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

/* Картинки */
var gnd = new Image();
var bg = new Image();
var hero = new Image();
var spikes = new Image();
var fire = new Image();

/* Источники картинок */
gnd.src = "images/ground.png";
bg.src = "images/back.png";
fire.src = "images/fire.png"
spikes.src = "images/spikes.png"
hero.src = "images/mainpersright.png"; //Начальное положение в покое

var indi = new HeroClass(hero); // создание и инициализация объекта главный герой
//indi - имя главного героя

/* Нажатия клавиш */
var rightPressed = false;
var leftPressed = false;
var spacePressed = false;

/* События */
document.addEventListener("keydown", keyDownHandler, true);
document.addEventListener("keyup", keyUpHandler, true);
//document.addEventListener("resize", resize, true); //динамическое изменения размера окна


function keyDownHandler(e){
    /* Функция для первого события keydown */
    switch(e.which){
        case 39:
            rightPressed = true;
            break;
        case 37:
            leftPressed = true;
            break;
        case 32:
            spacePressed = true;
            break;
    }
}

function keyUpHandler(e){
    /* Функция для второго события keyup */
    switch(e.which){
        case 39:
            rightPressed = false;
            break;
        case 37:
            leftPressed = false;
            break;
        case 32:
            spacePressed = false;
            break;
    }
}

//Список статик-блоков блоков
var blocks = [];

/* Парсинг уровня из map.js */
parseMap(map);




function physics(){
    /*
        Функция физика - отвечает за анимацию,
        передвижение перса
    */
    if(rightPressed){

    	var j = ~~((indi.x + 30) / 32); //Целочисленное деление )) Нашел в инете
    	var i = ~~((indi.y + 80) / 32);

    	if(map[i - 1][j + 1] != 'G'){
        	indi.x += 1.5;
        	if(indi.stage == 0){
            	indi.hero.src = "images/maingonextright.png";
            	indi.prevStage = 0;
            	indi.stage = 1;
        	} else if (indi.stage == 1 && indi.prevStage == 0){
          		indi.hero.src = "images/maingoright.png";
          		indi.stage = 2;
          		indi.prevStage = 1;
        	} else if(indi.stage == 2){
            	indi.hero.src = "images/maingonextright.png";
            	indi.stage = 1;
            	indi.prevStage = 2;
        	} else if(indi.stage == 1 && indi.prevStage == 2){
            	indi.hero.src = "images/mainpersright.png";
            	indi.prevStage = 0;
            	indi.stage = 0;
        	}
    	}else {
    		indi.hero.src = "images/mainpersright.png";
    		indi.prevStage = 0;
    		indi.stage = 0;
    	}

    	indi.direction = "right";

    }

    if(leftPressed){
    	var j = ~~((indi.x + 30) / 32); //Целочисленное деление )) Нашел в инете
    	var i = ~~((indi.y + 80) / 32);

    	if(map[i - 1 ][j] != 'G'){
        	indi.x -= 1.5;
        	if(indi.stage == 0){
            	indi.hero.src = "images/maingonext.png";
            	indi.prevStage = 0;
            	indi.stage = 1;
        	} else if (indi.stage == 1 && indi.prevStage == 0){
          		indi.hero.src = "images/maingo.png";
          		indi.stage = 2;
          		indi.prevStage = 1;
        	} else if(indi.stage == 2){
            	indi.hero.src = "images/maingonext.png";
            	indi.stage = 1;
            	indi.prevStage = 2;
        	} else if(indi.stage == 1 && indi.prevStage == 2){
            	indi.hero.src = "images/mainpers.png";
            	indi.prevStage = 0;
            	indi.stage = 0;
        	}

    	}else {
    		indi.hero.src = "images/mainpers.png";
            indi.prevStage = 0;
            indi.stage = 0;
    	}

        indi.direction = "left";
    }

    collision();

    //Если нажат space и персонаж на земле то гравитация
    //равна 5
    if(spacePressed && indi.OnGround){
        indi.heroDY = 5;
    }


    //если не нажата ни одна клавиша и перс не в состоянии покоя
    //то оставить его в состоянии покоя
    //в направление куда смотрел
    if(!rightPressed && !leftPressed && indi.stage != 0){
        if(indi.direction == "right"){
            indi.hero.src = "images/mainpersright.png";
        } else {
            indi.hero.src = "images/mainpers.png";
        }
        indi.stage = 0;
    }
}

/* Взаимодействие с блоками */
function collision(){
    var j = ~~((indi.x + 40) / 32); //Целочисленное деление )) Нашел в инете
                                   //поэксперементируете с 40 и 80 поймете на что влияют
    var i = ~~((indi.y + 80) / 32);

    if(map[i][j] == 'G'){
        //Здесь думаю все понятно
        indi.OnGround = true;
        indi.heroDY = 0;
    }else{
        indi.OnGround = false;
    }
}

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

    physics();

    //Смещение по ординате
    indi.y -= indi.heroDY;

    //Если персонаж не на земле уменьшать гравитацию на 0.1
    //Можно эксперементировать со значениями
    if(!indi.OnGround){
    	var j = ~~((indi.x + 40) / 32); //Целочисленное деление )) Нашел в инете
    	var i = ~~((indi.y + 80) / 32);
    	if (map[i - 2][j] != 'G'){
        	indi.heroDY -= 0.1;
    	}else indi.heroDY = -0.1;
    }

    //ctx.drawRectange();
    ctx.drawImage(indi.hero , indi.x , indi.y , 80 , 80);
}


//Отрисовка динамических объектов в игре
//Частота обновления 1мс
var interval = setInterval(draw , 1);
