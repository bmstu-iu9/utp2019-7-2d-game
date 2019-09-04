'use strict';


/* indi - имя главного героя */
let indi = new Hero(hero); // создание и инициализация объекта главный герой
characters.push(indi); // добавляем его в спосок персонажей

/* создаем замок */
let doorLock = new LockClass(lockArr[lvl]);

/* текущий уровень*/
let curLevel = new LevelClass(lvl);

/*const mouseX;
const mouseY;
const fadeId = 0;
const buttonX = [200, 500, 240, 540];
const buttonY = [100, 400, 140, 440];
const buttonWidth = [150, 450, 190, 490];
const buttonHeight = [250, 550, 290, 590];
const time = 0.0;
canvas.addEventListener("mousemove", checkPos);
canvas.addEventListener("mouseUp", checkClick);

const checkPos = () => {
  if (mouseEvent.pageX || mouseEvent.pageY == 0) {
    mouseX = mouseEvent.pageX - this.offsetLeft;
    mouseY = mouseEvent.pageY = this.offsetTop;
  } else if (mouseEvent.offsetX || mouseEvent.offsetY == 0){
    mouseX = mouseEvent.offsetX;
    mouseY = mouseEvent.offsetY;
  }
}


const checkClick = () => {
  for (let i = 0; i < buttonX.lenght; i++) {
    if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
      if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i])
      fadeId = setInterval("fadeOut()", 1000/frames);
      clearInterval(timerId);
      canvas.removeEventListener("mousemove", checkPos);
      canvas.removeEventListener("mouseup", checkClick);
    }
  }
}

const fadeOut = () => {
  ctx.fillStyle = "rgba(0,0,0, 0.2)";
  ctx.fillRect (0, 0, width, height);
  time += 0.1;
  if(time >= 2){
    clearInterval(fadeId);
    time = 0;
    timerId = setInterval("update()", 1000/frames);
    canvas.addEventListener("mousemove", checkPos);
    canvas.addEventListener("mouseup", checkClick);
    }
}*/

/* вызываем генератор ботов */
botGenerate();

chestGenerate();

/* Парсинг уровня из map.js */
parseMap(maps[lvl],0,0);

const menuDraw = () => {
  ctx.clearRect(0 , 0 , canvas.width , canvas.height); // стираем все
  ctx.drawImage(texture, 0, 0, canvas.width, canvas.height);
  if (spacePressed){
    scene = 1;
  }
}

const drawGame = () => {
  //ctx.clearRect(0 , 0 , canvas.width , canvas.height); // стираем все
  ctx.drawImage(bg , 0 , 0); // рисуем фон
  // death();
  for (var i = 0 ; i < blocks.length ; i++){
    if (blocks[i].id == ' ' || blocks[i].id == 'C' || blocks[i].id == 'S' || blocks[i].id == 'W' || blocks[i].id == 'L') {
        ctx.drawImage(background ,NN[0] *  (blocks[i].x + FF[0]),NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
    } else if (blocks[i].id == 'F') {
        ctx.drawImage(fire ,NN[0] *  (blocks[i].x + FF[0]),NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
    }
  }
  death();
  for (var i = 0 ; i < blocks.length ; i++){
      if (blocks[i].id == 'G'){
          ctx.drawImage(gnd, NN[0] * (blocks[i].x + FF[0]) ,NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
      } else if (blocks[i].id == 'D'){
        if (curLevel.allCoins != curLevel.currentCoins) {
          ctx.drawImage(doorClsd ,NN[0] *  (blocks[i].x  + FF[0]),NN[1] *  (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 64);
        } else {
          ctx.drawImage(doorOpn ,NN[0] *  (blocks[i].x  + FF[0]),NN[1] *  (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 64);
        }
      }
      // else if (blocks[i].id == 'F') {
      //     ctx.drawImage(fire ,NN[0] *  (blocks[i].x + FF[0]),NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
      // }
      // else if (blocks[i].id == ' ' || blocks[i].id == 'C' || blocks[i].id == 'S' || blocks[i].id == 'W' || blocks[i].id == 'L') {
      //     ctx.drawImage(background ,NN[0] *  (blocks[i].x + FF[0]),NN[1] * (blocks[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
      // }
  }


  chestRules();
  /* выбор между отрисовками  */
  if ((!freeCamera && (!InBlock(indi,'D') )) || (!freeCamera && InBlock(indi,'D') && curLevel.doorOpen)) {
    if (indi.hp > 0) {
      drawHero(); // отрисовываем персонажа
    }
    bulletRules(); // отрисовываем пули и тд


    for (var i = 0; i < characters.length; i++) { // проходим по массиву ботов
      botRules(characters[i]);  // запускаем выбор поведения и отрисовку
      blockCheck(characters[i],i);
    }

  }else {
    if (freeCamera) {
      freeCameraRule(); // свободная камера
    }
  }



  // поздняя отрисовка блоков
  for (var i = 0 ; i < blocksAfter.length ; i++){
    if (blocksAfter[i].id == 'g') {
        ctx.drawImage(gnd ,NN[0] *  (blocksAfter[i].x  + FF[0]),NN[1] *  (blocksAfter[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
    } else if (blocksAfter[i].id == 's'){
      ctx.drawImage(gnd ,NN[0] *  (blocksAfter[i].x  + FF[0]),NN[1] *  (blocksAfter[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
    } else if (blocksAfter[i].id == 'S'){
      ctx.drawImage(spikes ,NN[0] *  (blocksAfter[i].x  + FF[0]),NN[1] *  (blocksAfter[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
    } else if (blocksAfter[i].id == 'L') {
      blocksAfter[i].posision = envN[0];
      ctx.drawImage(lava , (((~~envN[0]) * 32) % 96) ,0 ,32 ,32 , NN[0] * (blocksAfter[i].x  +  FF[0]),NN[1] * (blocksAfter[i].y + FF[1]) ,NN[0] * 32 ,NN[1] * 32 );
      envN[0] += 1.0025;
    } else if (blocksAfter[i].id == 'W') {
      blocksAfter[i].posision = envN[1];
      ctx.drawImage(water , ((((~~envN[1])) * 32) % 96) ,0 ,32 ,32 , NN[0] * (blocksAfter[i].x  +  FF[0]),NN[1] * (blocksAfter[i].y + FF[1]) ,NN[0] * 32 ,NN[1] * 32 );
      envN[1] += 1.0025;
    }  else if (blocksAfter[i].id == 'C'){
      ctx.drawImage(coin ,NN[0] *  (blocksAfter[i].x  + FF[0]),NN[1] *  (blocksAfter[i].y + FF[1]),NN[0] * 32,NN[1] * 32);
    }
  }


  /* Отрисовка надписей */
  ctx.strokeStyle = "white";
  ctx.font = 'bold 25px sans-serif';
  ctx.strokeText("Level: " + lvl + "   Coins: " + curLevel.currentCoins + " / " + curLevel.allCoins + "  Hp: " + curLevel.hp, 40, 65);

  inventoryAnimation();

  /* вызов замка */
  if (InBlock(indi,'D')) {  //проверка на дверь и переход на след Уровень
    if (curLevel.doorOpen) {
      if (curLevel.currentCoins == curLevel.allCoins) {
        if (lvl < maps.length - 1) {
          NextLevel();
        } else {
          End();
        }
      }
    } else {
      Lock();
    }
  }
}
/* Отрисовка динамических объектов */
const draw = () => {
      if (scene == 0){
        menuDraw();
      } else {
        drawGame();
      }
      requestAnimationFrame(draw);
}


//Отрисовка динамических объектов в игре
//Частота обновления 1мс
// var interval = setInterval(draw , 1);
draw();
