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

var mainHero = new HeroClass(hero); // создание и инициализация объекта главный герой

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


var stage = 0; // Стадия в анимации
var prevStage = 0;

var direction = "";

function physics(){
    /*
        Функция физика - отвечает за анимацию,
        передвижение перса
    */
    if(rightPressed){

    	var j = ~~((mainHero.x + 30) / 32); //Целочисленное деление )) Нашел в инете
    	var i = ~~((mainHero.y + 80) / 32);

    	if(map[i - 1][j + 1] != 'G'){
        	mainHero.x += 1.5;
        	if(stage == 0){
            	mainHero.hero.src = "images/maingonextright.png";
            	prevStage = 0;
            	stage = 1;
        	} else if (stage == 1 && prevStage == 0){
          		mainHero.hero.src = "images/maingoright.png";
          		stage = 2;
          		prevStage = 1;
        	} else if(stage == 2){
            	mainHero.hero.src = "images/maingonextright.png";
            	stage = 1;
            	prevStage = 2;
        	} else if(stage == 1 && prevStage == 2){
            	mainHero.hero.src = "images/mainpersright.png";
            	prevStage = 0;
            	stage = 0;
        	}
    	}else {
    		mainHero.hero.src = "images/mainpersright.png";
    		prevStage = 0;
    		stage = 0;
    	}

    	direction = "right";

    }

    if(leftPressed){
    	var j = ~~((mainHero.x + 30) / 32); //Целочисленное деление )) Нашел в инете
    	var i = ~~((mainHero.y + 80) / 32);

    	if(map[i - 1 ][j] != 'G'){
        	mainHero.x -= 1.5;
        	if(stage == 0){
            	mainHero.hero.src = "images/maingonext.png";
            	prevStage = 0;
            	stage = 1;
        	} else if (stage == 1 && prevStage == 0){
          		mainHero.hero.src = "images/maingo.png";
          		stage = 2;
          		prevStage = 1;
        	} else if(stage == 2){
            	mainHero.hero.src = "images/maingonext.png";
            	stage = 1;
            	prevStage = 2;
        	} else if(stage == 1 && prevStage == 2){
            	mainHero.hero.src = "images/mainpers.png";
            	prevStage = 0;
            	stage = 0;
        	}

    	}else {
    		mainHero.hero.src = "images/mainpers.png";
            prevStage = 0;
            stage = 0;
    	}

        direction = "left";
    }

    collision();

    //Если нажат space и персонаж на земле то гравитация
    //равна 5
    if(spacePressed && mainHero.OnGround){
        mainHero.heroDY = 5;
    }


    //если не нажата ни одна клавиша и перс не в состоянии покоя
    //то оставить его в состоянии покоя
    //в направление куда смотрел
    if(!rightPressed && !leftPressed && stage != 0){
        if(direction == "right"){
            mainHero.hero.src = "images/mainpersright.png";
        } else {
            mainHero.hero.src = "images/mainpers.png";
        }
        stage = 0;
    }
}

/* Взаимодействие с блоками */
function collision(){
    var j = ~~((mainHero.x + 40) / 32); //Целочисленное деление )) Нашел в инете
                                   //поэксперементируете с 40 и 80 поймете на что влияют
    var i = ~~((mainHero.y + 80) / 32);

    if(map[i][j] == 'G'){
        //Здесь думаю все понятно
        mainHero.OnGround = true;
        heroDY = 0;
    }else{
        mainHero.OnGround = false;
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
    mainHero.y -= mainHero.heroDY;

    //Если персонаж не на земле уменьшать гравитацию на 0.1
    //Можно эксперементировать со значениями
    if(!mainHero.OnGround){
    	var j = ~~((mainHero.x + 40) / 32); //Целочисленное деление )) Нашел в инете
    	var i = ~~((mainHero.y + 80) / 32);
    	if (map[i - 2][j] != 'G'){
        	mainHero.heroDY -= 0.1;
    	}else mainHero.heroDY = -0.1;
    }

    //ctx.drawRectange();
    ctx.drawImage(mainHero.hero , mainHero.x , mainHero.x , 80 , 80);
}


//Отрисовка динамических объектов в игре
//Частота обновления 1мс
var interval = setInterval(draw , 1);
