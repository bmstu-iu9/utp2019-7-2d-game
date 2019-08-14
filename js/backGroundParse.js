function backGroundParse(dX,dY,DD){
  for (var i = 0; i < blocks.length; i++) {
    // block[i].id = 'G';
    blocks[i].x -= dX;
    blocks[i].y -= dY;
  }
  DD[0] -= dX;
  DD[1] -= dY;


}
