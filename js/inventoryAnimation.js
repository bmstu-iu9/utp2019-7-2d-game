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
            ctx.strokeText("Здоровье: +" + o.hp , 900, 65);
          } else {
            ctx.strokeText("Здоровье: " + o.hp , 900, 65);
          }
        } else if (o.speed != 0) {
          if (o.speed > 0) {
            ctx.strokeText("Скорость: +" + o.speed , 900,65);
          } else {
            ctx.strokeText("Скорость: " + o.speed , 900, 65);
          }
        } else if (o.firePower != 0) {
          if (o.firePower > 0) {
            ctx.strokeText("Урон: +" + o.firePower , 900, 65);
          } else {
            ctx.strokeText("Урон: " + o.firePower , 900, 65);
          }
        } else if (o.fireSpeed != 0) {
          if (o.fireSpeed > 0) {
            ctx.strokeText("Скорость пули: +" + o.fireSpeed , 900, 65);
          } else {
            ctx.strokeText("Скорость пули: " + o.fireSpeed , 900, 65);
          }
        } else if (o.heroDYconst != 0) {
          if (o.heroDYconst > 0) {
            ctx.strokeText("Прыгучесть: +" + o.heroDYconst , 900,65);
          } else {
            ctx.strokeText("Прыгучесть: " + o.heroDYconst , 900, 65);
          }
        } else if (o.shootTimeConst != 0) {
          if (o.shootTimeConst > 0) {
            ctx.strokeText("Перезарядка +" + o.shootTime , 900,65);
          } else {
            ctx.strokeText("Перезарядка: " + o.shootTime, 900, 65);
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
