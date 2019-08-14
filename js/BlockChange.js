function BlockChange(ii,jj,W,code){
  var arr ;
  switch (code) { // выбор по коду 0 - до , 1 - после
    case 0:
      arr = blocks;
      break;
    case 1:
      arr = blocksAfter;
      break;
    default:
      arr = blocks;
  }
  var jT = ~~(ii / 32); //Целочисленное деление )) Нашел в инете
  var iT = ~~(jj / 32)
  for (var i = 0; i < arr.length; i++) {
    if ( (arr[i].i ==  iT )  &&  (arr[i].j ==  jT )) { //нахождение данного
      arr[i].id = W; //смена id
    }
  }
}
