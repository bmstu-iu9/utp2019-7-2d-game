/* Канвас и контекст 2D */
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

/* Картинки */
let gnd = new Image();
let bg = new Image();
let hero = new Image();
let spikes = new Image();
let fire = new Image();
let coin = new Image();
// var Level = 0; // номер уровня(пока не используется)

let DD = new Array(2); //глобальное смещение !!(лучше не трогать)!!
DD[0] = 0;
DD[1] = 0;

/* Источники картинок */
gnd.src = "images/ground.png";
bg.src = "images/back.png";
fire.src = "images/fire.png"
spikes.src = "images/spikes.png";
hero.src = "images/runR.png"; //Начальное положение в покое
coin.src = "images/coin.png";  //пока не нарисована монета, будет использоваться факел

/* Нажатия клавиш */
let rightPressed = false;
let leftPressed = false;
let spacePressed = false;

//Список статик-блоков блоков
let blocks = []; //отрисовка до героя
let blocksAfter = []; //отрисовка после героя
let bots = []; // список ботов
let memory = []; //память траектории Инди (пока тестится)
