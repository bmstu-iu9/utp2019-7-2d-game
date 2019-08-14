function backGroundParse(dX,dY,DD){
  for (var i = 0; i < blocks.length; i++) { //сдвиг все блоков с кодом 0
    blocks[i].x -= dX;
    blocks[i].y -= dY;
  }

  for (var i = 0; i < blocksAfter.length; i++) {  //сдвиг все блоков с кодом 1
    blocksAfter[i].x -= dX;
    blocksAfter[i].y -= dY;
  }

  DD[0] -= dX;  // изменение глобального смещения!!!
  DD[1] -= dY;  // изменение глобального смещения!!!


}
