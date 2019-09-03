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
const mgbg = new Image();
const darkness = new Image();
const up = new Image();
const down = new Image();
const rbl = new Image();
const life = new Image();
const doorOpn = new Image();
const doorClsd = new Image();
const Pgreen = new Image();
const Pred= new Image();
const Pblue = new Image();
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
// все что должно очищаться в начале каждого уровня должно быть добавлено в RestartLevel()
