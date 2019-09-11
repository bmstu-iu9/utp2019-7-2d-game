/* События */
document.addEventListener("keydown", keyDownHandler, true);
document.addEventListener("keyup", keyUpHandler, true);

//Функция для первого события keydown

function keyDownHandler (e) {
  switch(e.which) {
  case 38:
  upPressed = true;
  break
  case 39:
  rightPressed = true;
  break;
  case 37:
  leftPressed = true;
  break
  case 40:
  downPressed = true;
  break;
  case 32:
  spacePressed = true;
  break
  case 67:
  freeCamera = !freeCamera;
  break;
  case 187:
  plusPressed = true;
  break
  case 189:
  minusPressed = true;
  break
  }
  if ((e.which >= 48) && (e.which <= 57)){
    numbers[e.which - 48] = true;
  }
}

//Функция для второго события keyup

function keyUpHandler (e) {
  switch(e.which) {
  case 38:
  upPressed = false;
  break
  case 39:
  rightPressed = false;
  break;
  case 37:
  leftPressed = false;
  break;
  case 40:
  downPressed = false;
  break;
  case 32:
  spacePressed = false;
  break
  case 187:
  plusPressed = false;
  break
  case 189:
  minusPressed = false;
  break
  }
  if ((e.which >= 48) && (e.which <= 57)){
    numbers[e.which - 48] = false;
  }
}
