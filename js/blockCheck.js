const blockCheck = (o,i) => {
  if (o.id != 0) {
    if (InBlock(o, 'S')) {
      o.hp = 0;
      deathlist.push(o);
      characters.splice(i, 1);
    }

    if (InBlock(o, 'W')) {
      o.speed = o.normSpeed * 0.5;
      ctx.drawImage(water , ((((~~envN[1])) * 32) % 96), 0, 32, 32, NN[0] * (blocks[(~~((o.y + 48)  / 32)) * map[0].length + (~~((o.x + 16)  / 32))].x  +  FF[0]),NN[1] * (blocks[(~~((o.y + 48)  / 32)) * map[0].length + (~~((o.x + 16)  / 32))].y + FF[1]) ,NN[0] * 32, NN[1] * 32 );
    } else {
      o.speed = o.normSpeed;
    }
  } else {
    if (InBlock(indi,'g')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      BlockChange(indi, (indi.x + 16), (indi.y + 16),'g', ' '); //смена по коду   0 - до , 1 - после
      BlockChange(indi, (indi.x + 16), (indi.y + 48),'g', ' '); //смена по коду   0 - до , 1 - после
    }

    if (InBlock(indi,'a')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      BlockChange(indi, (indi.x + 16), (indi.y + 16),'a', 'S' , 1); //смена по коду   0 - до , 1 - после
      BlockChange(indi, (indi.x + 16), (indi.y + 48),'a', 'S' , 1); //смена по коду  0 - до , 1 - после
    }

    if (InBlock(indi,'s')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      BlockChange(indi, (indi.x + 16), (indi.y + 16), 's', 'S'); //смена по коду   0 - до , 1 - после
      BlockChange(indi, (indi.x + 16), (indi.y + 48), 's', 'S'); //смена по коду  0 - до , 1 - после
    }

    if (InBlock(o,'S')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      o.hp = 0;
      deathlist.push(o);
      characters.splice(i,1);
    }

    if (InBlock(indi,'C')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      BlockChange(indi, (indi.x + 16), (indi.y + 16), 'C', ' ', 0); //смена по коду   0 - до , 1 - после
      BlockChange(indi, (indi.x + 16), (indi.y + 48), 'C', ' ', 0); //смена по коду   0 - до , 1 - после
      curLevel.currentCoins++;
    }

    if (InBlock(indi, 'W')) {
      indi.speed = indi.normSpeed * 0.5;
      ctx.drawImage(water , ((((~~envN[1])) * 32) % 96), 0, 32, 32, NN[0] * (blocks[(~~((indi.y + 48)  / 32)) * map[0].length + (~~((indi.x + 16)  / 32))].x  +  FF[0]),NN[1] * (blocks[(~~((indi.y + 48)  / 32)) * map[0].length + (~~((indi.x + 16)  / 32))].y + FF[1]) ,NN[0] * 32, NN[1] * 32 );
    } else {
      indi.speed = indi.normSpeed;
    }
  }
}
