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

/* Координаты перса */
var heroX = 0;
var heroY = 336;

/* Гравитация героя */
var heroDY = 0;

/* На земле ли перс */
var heroOnGround = false;

/* Нажатия клавиш */
var rightPressed = false;
var leftPressed = false;
var spacePressed = false;

/* События */
document.addEventListener("keydown", keyDownHandler, true);
document.addEventListener("keyup", keyUpHandler, true);

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
parseMap();

var stage = 0; // Стадия в анимации
var prevStage = 0;

var direction = "";

function physics(){
    /*
        Функция физика - отвечает за анимацию,
        передвижение перса
    */
    if(rightPressed){
        if(stage == 0){
            hero.src = "images/maingonextright.png";
            prevStage = 0;
            stage = 1;
        } else if (stage == 1 && prevStage == 0){
          hero.src = "images/maingoright.png";
          stage = 2;
          prevStage = 1;
        } else if(stage == 2){
            hero.src = "images/maingonextright.png";
            stage = 1;
            prevStage = 2;
        } else if(stage == 1 && prevStage == 2){
            hero.src = "images/mainpersright.png";
            prevStage = 0;
            stage = 0;
        }
        var j = ~~((heroX + 30) / 32); //Целочисленное деление )) Нашел в инете
    	var i = ~~((heroY + 80) / 32);
    	
    	if(map[i - 1][j + 1] != 'G'){
        	heroX += 1.5;
    	}
    	//ctx.drawImage(gnd ,  (j + 1) * 32 , (i) * 32);
    	direction = "right";

    }

    if(leftPressed){
        if(stage == 0){
            hero.src = "images/maingonext.png";
            prevStage = 0;
            stage = 1;
        } else if (stage == 1 && prevStage == 0){
          hero.src = "images/maingo.png";
          stage = 2;
          prevStage = 1;
        } else if(stage == 2){
            hero.src = "images/maingonext.png";
            stage = 1;
            prevStage = 2;
        } else if(stage == 1 && prevStage == 2){
            hero.src = "images/mainpers.png";
            prevStage = 0;
            stage = 0;
        }
        var j = ~~((heroX + 30) / 32); //Целочисленное деление )) Нашел в инете
    	var i = ~~((heroY + 80) / 32);
    	
    	if(map[i - 1][j] != 'G'){
        	heroX -= 1.5;
    	}
    	
    
        direction = "left";
    }

    collision();

    //Если нажат space и персонаж на земле то гравитация
    //равна 5
    if(spacePressed && heroOnGround){
        heroDY = 5;
    }

    //если не нажата ни одна клавиша и перс не в состоянии покоя
    //то оставить его в состоянии покоя
    //в направление куда смотрел
    if(!rightPressed && !leftPressed && stage != 0){
        if(direction == "right"){
            hero.src = "images/mainpersright.png";
        } else {
            hero.src = "images/mainpers.png";
        }
        stage = 0;
    }
}

/* Взаимодействие с блоками */
function collision(){
    var j = ~~((heroX + 40) / 32); //Целочисленное деление )) Нашел в инете
                                   //поэксперементируете с 40 и 80 поймете на что влияют
    var i = ~~((heroY + 80) / 32);

    if(map[i][j] == 'G'){
        //Здесь думаю все понятно
        heroOnGround = true;
        heroDY = 0;
    }else{
        heroOnGround = false;
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
    heroY -= heroDY;

    //Если персонаж не на земле уменьшать гравитацию на 0.1
    //Можно эксперементировать со значениями
    if(!heroOnGround){
        heroDY -= 0.1;
    }

    ctx.drawImage(hero , heroX , heroY , 80 , 80);
}

/* Парсер карты */
function parseMap(){
    //Если G - это земля
    //Если S - это шипы
    //Если F - это факел
    /*
     Если пробел , пропускаем ;
     Если видим какой -то блок , то определяем какой это блок
     и создаем под него объект и кидаем в список блоков blocks
    */
    for (var i = 0; i < map.length ; i++){
        for (var j = 0 ; j < map[i].length ; j++){
            if (map[i][j] == ' '){
                continue;
            }
            else if (map[i][j] == 'G'){
                var o = {};
                o.id = 'G';
                o.x = j * 32;
                o.y = i * 32;
            }
            else if (map[i][j] == 'S'){
                var o = {};
                o.id = 'S';
                o.x = j * 32;
                o.y = i * 32;
            }
            else if (map[i][j] == 'F'){
                var o = {};
                o.id = 'F';
                o.x = j * 32;
                o.y = i * 32;
            }
            blocks.push(o);
        }
    }
}

//Отрисовка динамических объектов в игре
//Частота обновления 1мс
var interval = setInterval(draw , 1);