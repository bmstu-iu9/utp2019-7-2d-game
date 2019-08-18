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

  //Список статик-блоков блоков
  blocks = []; //отрисовка до героя
  blocksAfter = []; //отрисовка после героя
  bots = []; // список ботов
  memory = []; //память траектории Инди (пока тестится)
  characters = [];

  indi = new HeroClass(hero); // создание и инициализация объекта главный герой
  // var bot = new BotClass(1);
  //indi - имя главного героя
  indi.width = 32;
  indi.height = 64;

  curLevel = new LevelClass(lvl); //текущий уровень
  botGenerate();
  /* Парсинг уровня из map.js */
  characters.push(indi);
  // map[0].replace('G','F');
  parseMap(maps[lvl],0,0);
}
