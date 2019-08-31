const inventoryAnimation = () => {
    if (indi.inventory.length > 0) {
      let o = indi.inventory[~~indi.inventoryPosision];
      if ((indi.inventoryPosision % 1) < 0.5) {
        ctx.drawImage(o.texture,1000,50,60,60)
      } else {
        ctx.strokeStyle = "white ";
        ctx.font = 'bold 25px sans-serif';
        ctx.drawImage(o.texture,850,40)
        if (o.hp != 0) {
          if (o.hp > 0) {
            ctx.strokeText("прибавка к здоровью: " + o.hp , 900, 65);
          } else {
            ctx.strokeText("потеря здоровья: -" + Math.abs(o.hp) , 900, 65);
          }
        } else if (o.speed != 0) {
          if (o.speed > 0) {
            ctx.strokeText("прибавка к скорости: " + o.speed , 900,65);
          } else {
            ctx.strokeText("потеря скорости: -" + Math.abs(o.speed) , 900, 65);
          }
        } else if (o.firePower != 0) {
          if (o.firePower > 0) {
            ctx.strokeText("прибавка к урону: " + o.firePower , 900, 65);
          } else {
            ctx.strokeText("потеря урона: -" + Math.abs(o.firePower) , 900, 65);
          }
        } else if (o.fireSpeed != 0) {
          if (o.fireSpeed > 0) {
            ctx.strokeText("ускорение пули: " + o.fireSpeed , 900, 65);
          } else {
            ctx.strokeText("замедление пули: -" + Math.abs(o.fireSpeed) , 900, 65);
          }
        }
      }
      indi.inventoryPosision += 0.005;
      if (indi.inventoryPosision > indi.inventory.length) {
        indi.inventoryPosision = 0;
        indi.inventory = [];
      }

    }
}
