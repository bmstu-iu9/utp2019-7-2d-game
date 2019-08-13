function OnGround(Object) {
  var j = ~~( Object.x / 32); //Целочисленное деление )) Нашел в инете
  var i = ~~( Object.y  / 32);
  if ((map[ i + 2 ] [ j ] == 'G') || (map[ i + 2 ] [ j + 1 ] == 'G')) {
    if (Object.heroDY <= 0) {
      Object.y = i *32;
    }
    return true;
  }else {
    return false;
  }
}
