const chestRules = () => {

  /* Гравитация сундука */
  const moveD = (b) => {
    if (OnCeil(b) && b.heroDY > 0) {
      b.heroDY = 0;
    }
    b.y -= b.heroDY;
    if (! OnGround1(b)) {
      b.heroDY -= 0.25;
    } else {
      b.heroDY = 0;
    }
  }

  /* опустошение сундука */
  const loot = (b) => {
    if ((Math.abs(indi.x - b.x ) <= 32) && (Math.abs(indi.y - b.y)  <= 32)) {
      for (var i = 0; i < b.inventory.length; i++) {
        use(b.inventory[i]);
        indi.inventory.push(b.inventory[i]);
      }
      b.inventory = [];
      b.texture.src = "images/environment/boxOpn.png";
    }
  }

  /* применение предмета */
  const use = (o) => {
    if (o.bulletID < 20) {
      if (indi.hp + o.hp > 0) {
        indi.hp += o.hp;
      }
      if (indi.speed + o.speed > 0) {
        indi.speed += o.speed;
      }
      if (indi.firePower + o.firePower > 0) {
        indi.firePower += o.firePower;
      }
      if (indi.fireSpeed + o.fireSpeed > 0) {
        indi.fireSpeed += o.fireSpeed;
      }
      if (indi.shootTimeConst + o.shootTimeConst > 0) {
        indi.shootTimeConst += o.shootTimeConst;
      }
      if (indi.heroDYconst + o.heroDYconst > 0) {
        indi.heroDYconst += o.heroDYconst;
      }
      if (o.bulletID != 0) {
        indi.bulletID = o.bulletID;
      }
    }
  }

  /* обход массива сундуков */
  for (var i = 0; i < chests.length; i++) {
    moveD(chests[i]);
    loot(chests[i]);
    if (chests[i] != undefined){
      ctx.drawImage(chests[i].texture ,NN[0] * (chests[i].x + DD[0] + FF[0]),NN[1] * (chests[i].y + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 32); // анимация бега    bot.posision += 0.03;
    }
  }


}
