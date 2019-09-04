const inventoryAnimation = () => {
    if (indi.inventory.length > 0) {
      let o = indi.inventory[~~indi.inventoryPosision];
      if ((indi.inventoryPosision % 1) < 0.5) {
        if ((o.bulletID != 0) && ( o.bulletID < 20)) {
          ctx.drawImage(bulletsImages[o.bulletID - 1],1000,50,60,20);
        } else {
          ctx.drawImage(o.texture,1000,50,60,60);
        }
      } else {
        ctx.strokeStyle = "white ";
        ctx.font = 'bold 25px sans-serif';
        if ((o.bulletID != 0) && (o.bulletID < 20)) {
          ctx.drawImage(bulletsImages[o.bulletID - 1],850,50,30,10);
        } else {
          ctx.drawImage(o.texture,850,40)
        }
        if (o.hp != 0) {
          if (o.hp > 0) {
            ctx.strokeText("Здоровье: +" + o.hp , 900, 65);
          } else {
            ctx.strokeText("Здоровье: " + o.hp , 900, 65);
          }
        } else if ( o.bulletID > 20) {
          switch (o.bulletID) {
            case 24:
            ctx.strokeStyle = "green";
            ctx.shadowColor = "aqua";
            ctx.shadowOffsetX = -3;
            ctx.shadowOffsetY = -5;
            ctx.shadowBlur = 1;
              break;
              case 25:
              ctx.strokeStyle = "red";
              ctx.shadowColor = "purple";
              ctx.shadowOffsetX = 7;
              ctx.shadowOffsetY = 1;
              ctx.shadowBlur = 3;
                break;
                case 26:
                ctx.strokeStyle = "green";
                ctx.shadowColor = "blue";
                ctx.shadowOffsetX = 7;
                ctx.shadowOffsetY = 1;
                ctx.shadowBlur = 3;
                  break;
                  case 27:
                  ctx.strokeStyle = "green";
                  ctx.shadowColor = "red";
                  ctx.shadowOffsetX = 7;
                  ctx.shadowOffsetY = 1;
                  ctx.shadowBlur = 3;
                    break;
            default:
              ctx.strokeStyle = "white ";
            }
            ctx.strokeText("магия (:" , 900, 65);
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
        } else if ((o.bulletID != 0) && ( o.bulletID < 20)) {
            switch (o.bulletID) {
              case 1:
                ctx.strokeStyle = "white ";
                break;
                case 2:
                ctx.strokeStyle = "red";
                ctx.shadowColor = "red";
                ctx.shadowOffsetX = 3;
                ctx.shadowOffsetY = 3;
                ctx.shadowBlur = 7;
                  break;
                  case 3:
                  ctx.strokeStyle = "yellow";
                  ctx.shadowColor = "orange";
                  ctx.shadowOffsetX = 1;
                  ctx.shadowOffsetY = 1;
                  ctx.shadowBlur = 2;
                    break;
                    case 4:
                    ctx.strokeStyle = "pink ";
                    ctx.shadowColor = "red";
                    ctx.shadowOffsetX = 1;
                    ctx.shadowOffsetY = 1;
                    ctx.shadowBlur = 2;
                      break;
                      case 5:
                        ctx.strokeStyle = "blue ";
                        ctx.shadowColor = "white";
                        ctx.shadowOffsetX = 1;
                        ctx.shadowOffsetY = 1;
                        ctx.shadowBlur = 2;
                        break;
                        case 6:
                          ctx.strokeStyle = "white ";
                          ctx.shadowColor = "white";
                          ctx.shadowOffsetX = 4;
                          ctx.shadowOffsetY = 4;
                          ctx.shadowBlur = 4;
                          break;
                          case 7:
                            ctx.strokeStyle = "green ";
                            ctx.shadowColor = "green";
                            ctx.shadowOffsetX = 1;
                            ctx.shadowOffsetY = 1;
                            ctx.shadowBlur = 10;
                            break;
              default:
                ctx.strokeStyle = "white ";

            }
            ctx.font = 'bold 25px sans-serif';
            ctx.strokeText(bulletsNames[o.bulletID - 1], 900,65);
            ctx.strokeStyle = "white ";
            ctx.shadowColor = "transparent";

        }else if (o.heroDYconst != 0) {
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
