function botRules(DD){
  bot = bots[0];
  photo = new Image();
  // photo.src= "images/bot1R.png";
  switch (bot.number) {
    case 1:
      photo.src = "images/bot1R.png";
      break;
    case 2:
      photo.src = "images/bot2R.png";
      break;
    case 3:
      photo.src = "images/bot3R.png";
      break;
    default:
      photo.src = "images/bot1R.png";
  }

  bot.hero = photo;

  function moveL(b){
    b.x -= 0.3;
  }

  function moveR(b){
    b.x += 0.3;
  }

  function moveU(b){
    if (OnGround(b) && !OnCeil(b)) {
      b.heroDY = 2;
    }
  }

  function moveD(b){
    if (OnCeil(b) && b.heroDY > 0) {
      b.heroDY = 0;
    }
    b.y -= b.heroDY;
    if (! OnGround(b)) {
      b.heroDY -= 0.02;
    }else {
      b.heroDY = 0;
    }
  }


function goBotLeft(){
  if (!OnLeft(bot)) {
    moveL(bot);
  }
  if ( OnLeft(bot) ) {
      moveU(bot);
  }
}


function goBotRight(){
  if (!OnRight(bot)) {
    moveR(bot);
  }
  if ( OnRight(bot) ) {
      moveU(bot);
  }
}

moveD(bot);
goBotLeft(bot);

  // if ( DD[0] == 0 ) {
ctx.drawImage(bot.hero,bot.x + DD[0] ,bot.y + DD[1]);
// ctx.drawImage(bot.hero,bot.x,bot.y);

// }

}
