function InBlock(Object,W){
  var j = ~~((Object.x + 16)  / 32); //Целочисленное деление )) Нашел в инете
  var i = ~~((Object.y + 16)  / 32);
  var i2 = ~~((Object.y + 48)  / 32)
  return  ((map[ i  ] [ j ] == W) || (map[ i2  ] [ j ] == W)) ;
}
