const shoot = (Object) => {
  if (Object.orientation == 'r') {
     var o = new bulletClass(1,Object.x + Object.width,Object.y + Object.fireY,Object.fireSpeed,Object.firePower );
  } else {
    var o = new bulletClass(1,Object.x,Object.y + Object.fireY,- Object.fireSpeed,Object.firePower );
  }
  bullets.push(o);
}