/* События */
document.addEventListener("keydown", keyDownHandler, true);
document.addEventListener("keyup", keyUpHandler, true);

class evenList {
  constructor() {
  }
  keyDownHandler (e) {
      /* Функция для первого события keydown */
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

   keyUpHandler (e) {
       /* Функция для второго события keyup */
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
}
