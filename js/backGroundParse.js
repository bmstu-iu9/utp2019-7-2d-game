function backGroundParse(dX,dY,DD){
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].x -= dX;
    blocks[i].y -= dY;
  }

  for (var i = 0; i < blocksAfter.length; i++) {
    blocksAfter[i].x -= dX;
    blocksAfter[i].y -= dY;
  }

  DD[0] -= dX;
  DD[1] -= dY;


}
