'use strict';

/* Канвас и контекст 2D */
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

/* Картинки */
var gnd = new Image();
var bg = new Image();

gnd.src = "images/ground.png";
bg.src = "images/back.svg";

//Список существующих блоков
var blocks = [];

parseMap();

/* Отрисовка */
function draw(){
	ctx.clearRect(0 , 0 , canvas.width , canvas.height);
	ctx.drawImage(bg , 0 , 0);

	for (var i = 0 ; i < blocks.length ; i++){
		ctx.drawImage(gnd , blocks[i].x , blocks[i].y);
	}
}

/* Парсер карты */
function parseMap(){
	//Если G это земля и определяем ее координаты
	for (var i = 0; i < map.length ; i++){
		for (var j = 0 ; j < map[i].length ; j++){
			if (map[i][j] == ' '){
				continue;
			}
			else if (map[i][j] == 'G'){
				var o = {} ;
				o.x = j * 32;
				o.y = i * 32;
			}
			blocks.push(o);
		}
	}
}

//var interval = setInterval(draw , 1);