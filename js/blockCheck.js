const blockCheck = (o,i) => {
  if (o.id != 0) {
    if (InBlock(o.x, o.y, 'S')) {
      o.hp = 0;
      deathlist.push(o);
      characters.splice(i, 1);
    }

    if (InBlock(o.x, o.y, 'W')) {
      o.speed = o.normSpeed * 0.5;
      ctx.drawImage(water , ((((~~envN[1])) * 32) % 96), 0, 32, 32, NN[0] * (blocks[(~~((o.y + 48)  / 32)) * map[0].length + (~~((o.x + 16)  / 32))].x  +  FF[0]),NN[1] * (blocks[(~~((o.y + 48)  / 32)) * map[0].length + (~~((o.x + 16)  / 32))].y + FF[1]) ,NN[0] * 32, NN[1] * 32 );
      if (InBlock(o.x + 32, o.y, 'W')) {
        ctx.drawImage(water, ((((~~envN[1])) * 32) % 96), 0, 32, 32, NN[0] * (blocks[(~~((o.y + 48)  / 32)) * map[0].length + (~~((o.x + 48)  / 32))].x  +  FF[0]),NN[1] * (blocks[(~~((o.y + 48)  / 32)) * map[0].length + (~~((o.x + 48)  / 32))].y + FF[1]) ,NN[0] * 32, NN[1] * 32 );
      }
      if (InBlock(o.x - 32, o.y, 'W')) {
        ctx.drawImage(water, ((((~~envN[1])) * 32) % 96), 0, 32, 32, NN[0] * (blocks[(~~((o.y + 48)  / 32)) * map[0].length + (~~((o.x - 16)  / 32))].x  +  FF[0]),NN[1] * (blocks[(~~((o.y + 48)  / 32)) * map[0].length + (~~((o.x - 16)  / 32))].y + FF[1]) ,NN[0] * 32, NN[1] * 32 );
      }
    } else {
      o.speed = o.normSpeed;
    }
  } else {
    if (InBlock(o.x, o.y, 'g')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      BlockChange((o.x + 16), (o.y + 16),'g', ' '); //смена по коду   0 - до , 1 - после
      BlockChange((o.x + 16), (o.y + 48),'g', ' '); //смена по коду   0 - до , 1 - после
    }

    if (InBlock(o.x, o.y, 'a')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      BlockChange((o.x + 16), (o.y + 16),'a', 'S' , 1); //смена по коду   0 - до , 1 - после
      BlockChange((o.x + 16), (o.y + 48),'a', 'S' , 1); //смена по коду  0 - до , 1 - после
    }

    if (InBlock(o.x, o.y, 's')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      BlockChange((o.x + 16), (o.y + 16), 's', 'S'); //смена по коду   0 - до , 1 - после
      BlockChange((o.x + 16), (o.y + 48), 's', 'S'); //смена по коду  0 - до , 1 - после
    }

    if (InBlock(o.x, o.y,'S')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      o.hp = 0;
      deathlist.push(o);
      characters.splice(i,1);
    }

    if (InBlock(o.x, o.y, 'C')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      BlockChange((o.x + 16), (o.y + 16), 'C', ' ', 0); //смена по коду   0 - до , 1 - после
      BlockChange((o.x + 16), (o.y + 48), 'C', ' ', 0); //смена по коду   0 - до , 1 - после
      curLevel.currentCoins++;
    }

    if (InBlock(o.x, o.y, 'W')) {
      o.speed = o.normSpeed * 0.5;
      ctx.drawImage(water, ((((~~envN[1])) * 32) % 96), 0, 32, 32, NN[0] * (blocks[(~~((o.y + 48)  / 32)) * map[0].length + (~~((o.x + 16)  / 32))].x  +  FF[0]),NN[1] * (blocks[(~~((o.y + 48)  / 32)) * map[0].length + (~~((o.x + 16)  / 32))].y + FF[1]) ,NN[0] * 32, NN[1] * 32 );
      if (InBlock(o.x + 32, o.y, 'W')) {
        ctx.drawImage(water, ((((~~envN[1])) * 32) % 96), 0, 32, 32, NN[0] * (blocks[(~~((o.y + 48)  / 32)) * map[0].length + (~~((o.x + 48)  / 32))].x  +  FF[0]),NN[1] * (blocks[(~~((o.y + 48)  / 32)) * map[0].length + (~~((o.x + 48)  / 32))].y + FF[1]) ,NN[0] * 32, NN[1] * 32 );
      }
      if (InBlock(o.x - 32, o.y, 'W')) {
        ctx.drawImage(water, ((((~~envN[1])) * 32) % 96), 0, 32, 32, NN[0] * (blocks[(~~((o.y + 48)  / 32)) * map[0].length + (~~((o.x - 16)  / 32))].x  +  FF[0]),NN[1] * (blocks[(~~((o.y + 48)  / 32)) * map[0].length + (~~((o.x - 16)  / 32))].y + FF[1]) ,NN[0] * 32, NN[1] * 32 );
      }
    } else {
      o.speed = o.normSpeed;
    }
  }
}

const BlockChange = (jj,ii,WP,WN) => {
  let jT = ~~(jj / 32), iT = ~~(ii / 32); //Целочисленное деление )) Нашел в инете

  if (blocks[iT * map[0].length + jT].id == WP) { //нахождение данного
    blocks[iT * map[0].length + jT].id = WN; //смена id
  } else if (blocks[iT * map[0].length + jT + 1].id == WP && (WP == 'g' || WP == 's')) { //нахождение данного
    blocks[iT * map[0].length + jT + 1].id = WN; //смена id
  } else if (blocks[iT * map[0].length + jT - 1].id == WP && (WP == 'g' || WP == 's')) { //нахождение данного
    blocks[iT * map[0].length + jT - 1].id = WN; //смена id
  }
}

const  InBlock = (x, y, WORD) => {
  let j = ~~((x + 16)  / 32); //Целочисленное деление )) Нашел в инете
  let i = ~~((y + 16)  / 32);
  let i2 = ~~((y + 48)  / 32);
  return  (((blocks[i * map[0].length + j].id == WORD) || (blocks[i2 * map[0].length + j].id == WORD))
          || (((blocks[i * map[0].length + j + 1].id == WORD) || (blocks[i2 * map[0].length + j + 1].id == WORD)
          || (blocks[i * map[0].length + j - 1].id == WORD) || (blocks[i2 * map[0].length + j - 1].id == WORD))
          && (WORD == 'g' || WORD == 's'))
        );   // проверка на наличие блока
}
