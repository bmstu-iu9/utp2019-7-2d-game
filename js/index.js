'use strict';


/* indi - имя главного героя */
let indi = new Hero(hero); // создание и инициализация объекта главный герой
characters.push(indi); // добавляем его в спосок персонажей

/* создаем замок */
let doorLock = new LockClass(lockArr[lvl]);

/* текущий уровень*/
let curLevel = new LevelClass(lvl);

/* вызываем генератор ботов */
botGenerate();
/* Парсинг уровня из map.js */
parseMap(maps[lvl],0,0);
const drawMenu = () => {
  ctx.clearRect(0 , 0 , canvas.width , canvas.height); // стираем все
  ctx.drawImage(texture, 0, 0, canvas.width, canvas.height);
  if (spacePressed){
    scene = 1;
  }
}


/* Отрисовка динамических объектов */
const draw = () => {
      if (scene == 0){
        drawMenu();
      } else {
        drawGame();
      }
      requestAnimationFrame(draw);
}



//Отрисовка динамических объектов в игре
//Частота обновления 1мс
// var interval = setInterval(draw , 1);
draw();
