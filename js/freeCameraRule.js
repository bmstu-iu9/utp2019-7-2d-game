const freeCameraRule = () => {

  /* изменение по координатам  */
  if (rightPressed) {
    FF[0] -= 10;
  }
  if (leftPressed) {
    FF[0] += 10;
  }
  if (upPressed) {
    FF[1] += 10;
  }
  if (downPressed) {
    FF[1] -= 10;
  }

  /* изменение масштаба */
  if (plusPressed) {
    NN[0] += 0.02;
    NN[1] += 0.02;
  }
  if (minusPressed) {
    if (NN[0] > 0.02) {
      NN[0] -= 0.02;
      NN[1] -= 0.02;
    }
  }

  /* отрисовываем персов */
  for (var i = 0; i < characters.length; i++) {
    // characters[i].stat();
    // characters[i].hero.src = "images/coin.png";  // скоро будет нормальный вариант
    ctx.drawImage(characters[i].texture,NN[0] * (characters[i].x + DD[0] + FF[0]) , NN[1] * (characters[i].y + DD[1] + FF[1]), NN[0] * 32, NN[1] * 64);
  }
}
