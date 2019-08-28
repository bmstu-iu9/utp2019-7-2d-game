const Lock = () => {

  function upI(i) {
    if (i == 0) {
      doorLock.i = 1;
    } else if (i == 1) {
      doorLock.i = 2;
    } else if (i == 2) {
      doorLock.i = 0;
    }
  }

  MGBG.src = "images/environment/minigame.png";
  ctx.drawImage(MGBG, canvas.width/8 , canvas.height/8 , canvas.width/4*3 , canvas.height/4*3);
  ctx.fillStyle = "white";
  ctx.fillRect(canvas.width/5*2, canvas.height/8 , 7, canvas.height/4*3);
    if (zeroPressed) {
      doorLock.answer[doorLock.i] = 0;
      setTimeout(upI, 300, doorLock.i);
    } else if (onePressed) {
      doorLock.answer[doorLock.i] = 1;
      setTimeout(upI, 300, doorLock.i);
    } else if (twoPressed) {
      doorLock.answer[doorLock.i] = 2;
      setTimeout(upI, 300, doorLock.i);
    } else if (threePressed) {
      doorLock.answer[doorLock.i] = 3;
      setTimeout(upI, 300, doorLock.i);
    } else if (fourPressed) {
      doorLock.answer[doorLock.i] = 4;
      setTimeout(upI, 300, doorLock.i);
    } else if (fivePressed) {
      doorLock.answer[doorLock.i] = 5;
      setTimeout(upI, 300, doorLock.i);
    } else if (sixPressed) {
      doorLock.answer[doorLock.i] = 6;
      setTimeout(upI, 300, doorLock.i);
    } else if (sevenPressed) {
      doorLock.answer[doorLock.i] = 7;
      setTimeout(upI, 300, doorLock.i);
    } else if (eightPressed) {
      doorLock.answer[doorLock.i] = 8;
      setTimeout(upI, 300, doorLock.i);
    } else if (ninePressed) {
      doorLock.answer[doorLock.i] = 9;
      setTimeout(upI, 300, doorLock.i);
    }

    ctx.font="30px Arial";
    ctx.strokeText("Взломай код,     чтобы перейти на новый уровень", 300, 150)


    ctx.font = 'bold 35px sans-serif';
    ctx.strokeText(doorLock.answer[0]+"     "+doorLock.answer[1]+"     "+doorLock.answer[2], 250, 350);
    ctx.font = 'bold 25px sans-serif';

    ctx.strokeText(doorLock.text1[0]+"  "+doorLock.text1[1]+"  "+doorLock.text1[2], 530, 200);
    ctx.strokeText(doorLock.text2[0]+"  "+doorLock.text2[1]+"  "+doorLock.text2[2], 530, 280);
    ctx.strokeText(doorLock.text3[0]+"  "+doorLock.text3[1]+"  "+doorLock.text3[2], 530, 360);
    ctx.strokeText(doorLock.text4[0]+"  "+doorLock.text4[1]+"  "+doorLock.text4[2], 530, 440);
    ctx.strokeText(doorLock.text5[0]+"  "+doorLock.text5[1]+"  "+doorLock.text5[2], 530, 520);

    ctx.font="18px Arial";

    ctx.strokeText("Две цифры правильные, но стоят на неправильных местах", 610, 200);
    ctx.strokeText("Одна цифра правильная, но стоит на неправильном месте", 610, 280);
    ctx.strokeText("Одна цифра правильная и стоит на правильном месте", 610, 360);
    ctx.strokeText("Одна цифра праильная, но стоит на неправильном месте", 610, 440);
    ctx.strokeText("Ничего неправильно", 610, 520);

    ctx.font = 'bold 25px sans-serif';


    if ((doorLock.answer[0] == doorLock.key[0]) && (doorLock.answer[1] == doorLock.key[1]) && (doorLock.answer[2] == doorLock.key[2])) {
      //ctx.strokeText("ok", 200, 200);
      if (lvl < maps.length-1) {
        NextLevel();
        //setTimeout(NextLevel, 3000);
      } else {
        End();
        //setTimeout(End, 3000);
        }
    }
}
