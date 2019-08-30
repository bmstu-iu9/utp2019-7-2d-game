const backGroundParse = (dX,dY,DD) => {
  // dX *= NN[0];
  // dY *= NN[1];
  for (let i = 0; i < blocks.length; i++) { //сдвиг все блоков с кодом 0
    blocks[i].x -= dX;
    blocks[i].y -= dY;
  }

  for (let i = 0; i < blocksAfter.length; i++) {  //сдвиг все блоков с кодом 1
    blocksAfter[i].x -= dX;
    blocksAfter[i].y -= dY;
  }
  DD[0] -= dX;  // изменение глобального смещения!!!
  DD[1] -= dY;  // изменение глобального смещения!!!
}
