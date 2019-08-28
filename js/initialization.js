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
const lava = new Image();
const water = new Image();
const background = new Image();
const MGBG = new Image();
// var Level = 0; // номер уровня(пока не используется)

let DD = new Array(2); //глобальное смещение !!(лучше не трогать)!!
  DD[0] = 0;
  DD[1] = 0;



let NN = new Array(2); // МАСШТАБ!!!! !!(лучше не трогать)!!
  NN[0] = 1.5;
  NN[1] = 1.5;


let FF = new Array(2); //глобальное смещение камеры !!(лучше не трогать)!!
  FF[0] =  0;
  FF[1] =  0;

let envN = new Array(2); //глобальное смещение камеры !!(лучше не трогать)!!
  envN[0] =  0;
  envN[1] =  0;

/* Источники картинок */
gnd.src = "images/environment/ground.png";
bg.src = "images/environment/back.png";
fire.src = "images/environment/fire.png"
spikes.src = "images/environment/spikes.png";
hero.src = "images/hero/HeroR.png"; //Начальное положение в покое
coin.src = "images/coin.png";  //пока не нарисована монета, будет использоваться факел
lava.src = "images/environment/lavaf.png"
water.src = "images/environment/waterf.png"
background.src = "images/environment/background.png";

/* Нажатия клавиш */
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let spacePressed = false;
let freeCamera = false;
let plusPressed = false;
let minusPressed = false;
let zeroPressed = false;
let onePressed = false;
let twoPressed = false;
let threePressed = false;
let fourPressed = false;
let fivePressed = false;
let sixPressed = false;
let sevenPressed = false;
let eightPressed = false;
let ninePressed = false;

let lvl = 1;

//Список статик-блоков блоков
// const blocks = []; //отрисовка до героя
// const blocksAfter = []; //отрисовка после героя
// const bots = []; // список ботов
// const memory = []; //память траектории Инди (пока тестится)
// const characters = [];
// const bullets = [];
// const deathlist = [];

let blocks = []; //отрисовка до героя
let blocksAfter = []; //отрисовка после героя
let bots = []; // список ботов
let memory = []; //память траектории Инди (пока тестится)
let characters = [];
let bullets = [];
let deathlist = [];

// все что должно очищаться в начале каждого уровня должно быть добавлено в RestartLevel()
