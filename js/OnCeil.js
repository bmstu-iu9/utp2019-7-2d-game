function OnCeil(Object){
  var j = ~~(Object.x / 32); //Целочисленное деление )) Нашел в инете
  var i = ~~(Object.y / 32);
  var i2 = ~~((Object.y + 1) / 32);
  if (i >= 1) {
    // проверка на наличие блока
    return ((map[ i  ] [ j ] == 'G') || (map[ i ] [ j + 1 ] == 'G'));
  } else {
    return true;
  }
}
