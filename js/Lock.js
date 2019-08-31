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
  ctx.drawImage(darkness, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(MGBG, canvas.width / 8 , canvas.height / 8 , (canvas.width / 4) * 3 , (canvas.height / 4) * 3);

  /* вставляем цифры */
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == true) {
      doorLock.answer[doorLock.i] = i;
      setTimeout(upI, 300, doorLock.i);
      numbers[i] = false;
    }
  }
  ctx.fillStyle = "white";
  ctx.font="42px Arial";
  ctx.fillText("Взломай код, чтобы перейти на новый уровень", 180, 150)
  ctx.font = 'bold 60px sans-serif';
  ctx.strokeText(doorLock.answer[0], 222, 360);
  ctx.strokeText(doorLock.answer[1], 342, 360);
  ctx.strokeText(doorLock.answer[2], 465, 360);
  ctx.font = 'bold 26px sans-serif';    ctx.fillText(doorLock.text1[0] + "  " + doorLock.text1[1] + "  " + doorLock.text1[2], 547, 200);
  ctx.fillText(doorLock.text2[0] + "  " + doorLock.text2[1] + "  " + doorLock.text2[2], 547, 300);
  ctx.fillText(doorLock.text3[0] + "  " + doorLock.text3[1] + "  " + doorLock.text3[2], 547, 400);
  ctx.fillText(doorLock.text4[0] + "  " + doorLock.text4[1] + "  " + doorLock.text4[2], 547, 500);
  ctx.fillText(doorLock.text5[0] + "  " + doorLock.text5[1] + "  " + doorLock.text5[2], 547, 600);
  ctx.font="20px Arial";

  ctx.fillText("Две цифры правильные, но стоят не на тех местах" , 626, 200);
  ctx.fillText("Одна цифра правильная, но стоит не на том месте" , 626, 300);
  ctx.fillText("Одна цифра правильная и стоит на том месте" , 626, 400);
  ctx.fillText("Одна цифра праильная, но стоит не на том месте" , 626, 500);
  ctx.fillText("Ничто не истина" ,626 ,600);

  ctx.font = 'bold 25px sans-serif';

  if ((doorLock.answer[0] == doorLock.key[0]) && (doorLock.answer[1] == doorLock.key[1]) && (doorLock.answer[2] == doorLock.key[2])) {
    //ctx.strokeText("ok", 200, 200);
    if (lvl < maps.length - 1) {
      NextLevel();
      //setTimeout(NextLevel, 3000);
    } else {
      End();
      //setTimeout(End, 3000);
    }
  }
}
