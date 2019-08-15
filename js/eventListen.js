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
  break;
  case 32:
  spacePressed = true;
  break;
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
  case 32:
  spacePressed = false;
  break;
  }
}
