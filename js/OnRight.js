function OnRight(Object){
  var j = ~~((Object.x + 1) / 32); //Целочисленное деление )) Нашел в инете
  var i = ~~(Object.y / 32);
  var i2 = ~~((Object.y - 1) / 32);
  // проверка на наличие блока
  return ( (map[ i + 1 ] [ j + 1 ] == 'G') || (map[ i] [ j + 1 ] == 'G') || (map[ i2 + 2 ] [ j + 1  ] == 'G') );
}
