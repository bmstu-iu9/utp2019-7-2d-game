/* События */
document.addEventListener("keydown", keyDownHandler, true);
document.addEventListener("keyup", keyUpHandler, true);

//Функция для первого события keydown

function keyDownHandler (e) {
  switch(e.which) {
  case 39:
  rightPressed = true;
  break;
  case 37:
  leftPressed = true;
  break
  case 38:
  upPressed = true;
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
  case 48:
  zeroPressed = true;
  break
  case 49:
  onePressed = true;
  break
  case 50:
  twoPressed = true;
  break
  case 51:
  threePressed = true;
  break
  case 52:
  fourPressed = true;
  break
  case 53:
  fivePressed = true;
  break
  case 54:
  sixPressed = true;
  break
  case 55:
  sevenPressed = true;
  break
  case 56:
  eightPressed = true;
  break
  case 57:
  ninePressed = true;
  break
  }
}

//Функция для второго события keyup
function keyUpHandler (e) {
  switch(e.which) {
  case 39:
  rightPressed = false;
  break;
  case 37:
  leftPressed = false;
  break;
  case 38:
  upPressed = false;
  break
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
  case 48:
  zeroPressed = false;
  break;
  case 49:
  onePressed = false;
  break
  case 50:
  twoPressed = false;
  break
  case 51:
  threePressed = false;
  break
  case 52:
  fourPressed = false;
  break
  case 53:
  fivePressed = false;
  break
  case 54:
  sixPressed = false;
  break
  case 55:
  sevenPressed = false;
  break
  case 56:
  eightPressed = false;
  break
  case 57:
  ninePressed = false;
  break

  // case 67:
  // freeCamera = false;
  // break;
  }
}
