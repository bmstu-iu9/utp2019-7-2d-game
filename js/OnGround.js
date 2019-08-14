function OnGround(Object) {
  var j = ~~( Object.x / 32); //Целочисленное деление )) Нашел в инете
  var i = ~~( Object.y  / 32);
  // проверка на наличие блока
  if ((map[ i + 2 ] [ j ] == 'G') || (map[ i + 2 ] [ j + 1 ] == 'G')) {
    if (Object.heroDY <= 0) {
      Object.y = i *32; //округление координаты 
    }
    return true;
  }else {
    return false;
  }
}
