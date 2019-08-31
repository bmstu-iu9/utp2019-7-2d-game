const chestGenerate = () => {
  let chest1 = new Chest(520,300); // создаем с данными координатами и типом
  chest1.inventory.push(new inventory(rbl,0,3,0,0));
  chest1.inventory.push(new inventory(up,0,0,0,10));
  chest1.inventory.push(new inventory(life,100,0,0,0));
  chests.push(chest1); // вносим в массив сундуков


  let chest3 = new Chest(100,300); // создаем с данными координатами и типом
  chest3.inventory.push(new inventory(rbl,0,3,0,0));
  chest3.inventory.push(new inventory(up,0,0,0,10));
  chest3.inventory.push(new inventory(life,100,0,0,0));
  chests.push(chest3); // вносим в массив сундуков


  let chest2 = new Chest(1320,500); // создаем с данными координатами и типом
  chest2.inventory.push(new inventory(up,0,0,100,0));
  chest2.inventory.push(new inventory(up,0,0,200,0));
  chest2.inventory.push(new inventory(down,0,0,0,-3));
  chests.push(chest2); // вносим в массив сундуков

}
