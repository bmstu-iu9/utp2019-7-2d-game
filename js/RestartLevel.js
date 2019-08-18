const RestartLevel = () => {
  rightPressed = false;
  leftPressed = false;
  spacePressed = false;

  DD = new Array(2); //глобальное смещение !!(лучше не трогать)!!
  DD[0]=0;
  DD[1]=0;

  //Список статик-блоков блоков
  blocks = []; //отрисовка до героя
  blocksAfter = []; //отрисовка после героя

  bots = []; // список ботов

  memory = []; //память траектории Инди (пока тестится)

  indi = new HeroClass(hero); // создание и инициализация объекта главный герой
  // var bot = new BotClass(1);
  //indi - имя главного героя
  indi.width = 32;
  indi.height = 64;

  curLevel = new LevelClass(lvl); //текущий уровень
  botGenerate();

  parseMap(maps[lvl],0,0);
}
