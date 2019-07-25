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
var heroX = 10;
var heroY = ( canvas.height / 2 ) - 8;

/* Нажатия клавиш */
var rightPressed = false;
var leftPressed = false;

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
    }
}

//Список статик-блоков блоков
var blocks = [];

/* Парсинг уровня из map.js */
parseMap();

var stage = 0; // Стадия в анимации
var direction = "";

function physics(){
    /*
        Функция физика - отвечает за анимацию,
        передвижение перса
    */
    if(rightPressed){
        if(stage == 0){
            hero.src = "images/mainpersright.png";
            stage = 1;
        } else if (stage == 1){
          hero.src = "images/maingonextright";
          stage = 2;
        } else {
            hero.src = "images/maingoright.png";
            stage = 0;
        }
        heroX += 1;
        direction = "right";
    }

    if(leftPressed){
        if(stage == 0){
            hero.src = "images/mainpers.png";
            stage = 1;
        } else if (stage == 1){
          hero.src = "images/maingonext.png";
          stage = 2;
        } else {
            hero.src = "images/maingo.png";
            stage = 0;
        }
        direction = "left";
        heroX -= 1;
    }

    if(!rightPressed && !leftPressed && stage != 0){
        if(direction == "right"){
            hero.src = "images/mainpersright.png";
        } else {
            hero.src = "images/mainpers.png";
        }
        stage = 0;
    }
}

/* Отрисовка динамических объектов */
function draw(){
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    ctx.drawImage(bg , 0 , 0);

    for (var i = 0 ; i < blocks.length ; i++){
        if (blocks[i].id == 'G'){
            ctx.drawImage(gnd , blocks[i].x, blocks[i].y);
        } else if (blocks[i].id == 'S'){
            ctx.drawImage(spikes , blocks[i].x, blocks[i].y);
        } else if (blocks[i].id == 'F') {
            ctx.drawImage(fire , blocks[i].x, blocks[i].y);
        }
    }

    physics();
    ctx.drawImage(hero , heroX , heroY);
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
