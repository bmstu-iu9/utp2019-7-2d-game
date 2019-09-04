const shoot = (Object) => {

  /* создание пули */
  if (Object.orientation == 'r') {
    // alert(Object.bulletID)
     var o = new bulletClass(Object.bulletID,Object.x + Object.width + 3,Object.y + Object.fireY,Object.fireSpeed,Object.firePower );
  } else {
    var o = new bulletClass(Object.bulletID,Object.x - 3 ,Object.y + Object.fireY,- Object.fireSpeed,Object.firePower );
  }
  bullets.push(o); // добавляем её
}
