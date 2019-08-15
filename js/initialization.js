/* Канвас и контекст 2D */
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

/* Картинки */
const gnd = new Image();
const bg = new Image();
const hero = new Image();
const spikes = new Image();
const fire = new Image();
const coin = new Image();
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
const blocks = []; //отрисовка до героя
const blocksAfter = []; //отрисовка после героя
const bots = []; // список ботов
const memory = []; //память траектории Инди (пока тестится)
