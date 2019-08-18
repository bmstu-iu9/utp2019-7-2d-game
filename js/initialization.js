/* Канвас и контекст 2D */
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

/* Картинки */
var gnd = new Image();
var bg = new Image();
var hero = new Image();
var spikes = new Image();
var fire = new Image();
var coin = new Image();



var DD = new Array(2); //глобальное смещение !!(лучше не трогать)!!
DD[0]=0;
DD[1]=0;

/* Источники картинок */
gnd.src = "images/ground.png";
bg.src = "images/back.png";
fire.src = "images/fire.png"
spikes.src = "images/spikes.png";
hero.src = "images/runR.png"; //Начальное положение в покое
coin.src = "images/coin.png";  //пока не нарисована монета, будет использоваться факел

/* Нажатия клавиш */
var rightPressed = false;
var leftPressed = false;
var spacePressed = false;

var lvl = 1; // номер текущего уровня

//Список статик-блоков блоков
var blocks = []; //отрисовка до героя
var blocksAfter = []; //отрисовка после героя

var bots = []; // список ботов

var memory = []; //память траектории Инди (пока тестится)
