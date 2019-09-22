/* Канвас и контекст 2D */
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

/* Картинки */
const arts = []
const gnd = new Image();
arts[0] = gnd;
const bg = new Image();
arts[1] = bg;
const hero = new Image();
arts[2] = hero;
const spikes = new Image();
arts[3] = spikes;
const fire = new Image();
arts[4] = fire;
const coin = new Image();
arts[5] = coin;
const lava = new Image();
arts[6] = lava;
const water = new Image();
arts[7] = water;
const background = new Image();
arts[8] = background;
const mgbg = new Image();
arts[9] = water;
const darkness = new Image();
arts[10] = darkness;
const up = new Image();
arts[11] = up;
const down = new Image();
arts[12] = down;
const rbl = new Image();
arts[13] = rbl;
const life = new Image();
arts[14] = life;
const doorOpn = new Image();
arts[15] = doorOpn;
const doorClsd = new Image();
arts[16] = doorClsd;
const Pgreen = new Image();
arts[17] = Pgreen;
const Pred= new Image();
arts[18] = Pred;
const Pblue = new Image();
arts[19] = Pblue;
const bulletsImages = [];
const bulletsNames = ["STANDARD","RED  DEMON","GOLDEN  EYE","PINK  PANTER","SPACE KILLER","IVORY","ACID  HELL"];
for (var i = 0; i < 7; i++) {
  bulletsImages[i] = new Image();
}

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
gnd.src = "images/environment/ground.png"; // земля
bg.src = "images/environment/back.png"; // фон
fire.src = "images/environment/fire.png" // факел
spikes.src = "images/environment/spikes.png"; // пики
hero.src = "images/hero/HeroR.png"; //Начальное положение в покое
coin.src = "images/coin.png";  //пока не нарисована монета, будет использоваться факел
lava.src = "images/environment/lavaf.png" // лава
water.src = "images/environment/waterf.png" // вода
background.src = "images/environment/background.png"; // фон кирпичиками)
mgbg.src = "images/environment/minigame.png"; //
darkness.src = "images/environment/BG2.png"; //
up.src = "images/inventory/arrowUp.png"
down.src = "images/inventory/arrowDown.png"
rbl.src = "images/inventory/speed.png"
life.src = "images/inventory/life1.png"
doorClsd.src = "images/environment/doorClsd.png"
doorOpn.src = "images/environment/doorOpn.png"
for (var i = 0; i < 7; i++) {
  let name = "images/weapons/bullet" + (i + 1) + "R.png";
  bulletsImages[i].src = name;
}


Pblue.src = "images/inventory/Pblue.png";
Pgreen.src = "images/inventory/Pgreen.png";
Pred.src = "images/inventory/Pred.png";
/* Нажатия клавиш */
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let spacePressed = false;
let freeCamera = false;
let plusPressed = false;
let minusPressed = false;
let PPressed = false;
let KPressed = false;
let TPressed = false;
let XPressed = false;
let YPressed = false;
let MousePressed = false;
let Mouse = [];
let numbers = [];
for (var i = 0; i < 9; i++) {
  numbers[i] = false;
}

let lvl = 1;


let blocks = []; //отрисовка до героя
let blocksAfter = []; //отрисовка после героя
let bots = []; // список ботов
let memory = []; //память траектории Инди (пока тестится)
let characters = [];
let bullets = [];
let deathlist = [];
let chests = [];
let BossArr = [];

const getRandomInt = (min,max) => {
  return Math.floor(Math.random() * (max - min) ) + min;
}

// все что должно очищаться в начале каждого уровня должно быть добавлено в RestartLevel()
