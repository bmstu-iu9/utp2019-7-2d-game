const botGenerate = () => {
  let bot1 = new BotClass(1,1820,500); // создаем с данными координатами и типом
  bots.push(bot1); // вносим в массив ботов
  characters.push(bot1); // вносим в массив всех персонажей
  let bot2 = new BotClass(2,1700,200); // создаем с данными координатами и типом
  bots.push(bot2); // вносим в массив ботов
  characters.push(bot2); // вносим в массив всех персонажей
}
