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
  case 80:
  PPressed = !PPressed;
  break
  case 75:
  KPressed = !KPressed;
  break
  case 84:
  TPressed = !TPressed;
  break
  case 88:
  XPressed = !XPressed;
  break
  case 89:
  YPressed = !YPressed;
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

if (document.attachEvent) document.attachEvent('onclick', handler);
else document.addEventListener('click', handler);

function handler(e) {
  e = e || window.event;

  var pageX = e.pageX;
  var pageY = e.pageY;

  // IE 8
  if (pageX === undefined) {
      pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  Mouse[0] = pageX;
  Mouse[1] = pageY;
  MousePressed = true;
  // console.log(pageX, pageY);
}
