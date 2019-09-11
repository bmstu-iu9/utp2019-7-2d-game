const RestartLevel = () => {
  DD = new Array(2); //глобальное смещение !!(лучше не трогать)!!
    DD[0] = 0;
    DD[1] = 0;

  NN = new Array(2); // МАСШТАБ!!!! !!(лучше не трогать)!!
    NN[0] = 1.5;
    NN[1] = 1.5;

  FF = new Array(2); //глобальное смещение камеры !!(лучше не трогать)!!
    FF[0] =  0;
    FF[1] =  0;

  /* Нажатия клавиш */
  rightPressed = false;
  leftPressed = false;
  upPressed = false;
  downPressed = false;
  spacePressed = false;
  freeCamera = false;
  plusPressed = false;
  minusPressed = false;
  for (var i = 0; i < 9; i++) {
    numbers[i] = false;
  }
  /* Список статик-блоков блоков*/
  blocks = []; //отрисовка до героя
  blocksAfter = []; //отрисовка после героя
  bots = []; // список ботов
  memory = []; //память траектории Инди (пока тестится)
  characters = []; // персонажи
  bullets = []; // пули и тд
  deathlist = []; // список смерти
  chests = [];
  /* создание и инициализация объекта главный герой */
  indi = new Hero(hero);
  characters.push(indi);
  ctx.strokeStyle = "white ";
  ctx.shadowColor = "transparent";
  curLevel = new LevelClass(lvl); // текущий уровень
  doorLock = new LockClass(lockArr[lvl]); // создаем новый замок

  /* вызываем генератор ботов */
  botGenerate();

  /* Парсинг уровня из map.js */
  parseMap(curLevel.map,0,0);
}
