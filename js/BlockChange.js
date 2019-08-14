function BlockChange(ii,jj,W,code){
  var Array ;
  switch (code) {
    case 0:
      Array = blocks;
      break;
    case 0:
      Array = blocksAfter;
      break;
    default:
      Array = blocks;
  }
  var jT = ~~(ii / 32); //Целочисленное деление )) Нашел в инете
  var iT = ~~(jj / 32)
  for (var i = 0; i < blocksAfter.length; i++) {
    if ( (blocksAfter[i].i ==  iT )  &&  (blocksAfter[i].j ==  jT )) {
    if (map[ iT  ] [ jT ] = 'g'){
      blocksAfter[i].id = ' ';
    }
  }
}
}
