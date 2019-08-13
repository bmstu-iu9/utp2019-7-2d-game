function backGroundParse(dX,dY){
  for (var i = 0; i < blocks.length; i++) {
    // block[i].id = 'G';
    blocks[i].x -= dX;
    blocks[i].y -= dY;
  }
}
