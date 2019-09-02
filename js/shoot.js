const shoot = (Object) => {

  /* создание пули */
  if (Object.orientation == 'r') {
     var o = new bulletClass(1,Object.x + Object.width + 3,Object.y + Object.fireY,Object.fireSpeed,Object.firePower );
  } else {
    var o = new bulletClass(1,Object.x - 3 ,Object.y + Object.fireY,- Object.fireSpeed,Object.firePower );
  }
  bullets.push(o); // добавляем её
}
