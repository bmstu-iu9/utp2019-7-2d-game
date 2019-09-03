const blockCheck = (o,i) => {
  if (o.id != 0) {
    if (InBlock(o,'S')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      o.hp = 0;
      deathlist.push(o);
      characters.splice(i,1);
    }
  } else {
    if (InBlock(indi,'g')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      BlockChange(indi , (indi.x + 16) ,(indi.y + 16),'g' ,' ' , 1); //смена по коду   0 - до , 1 - после
      BlockChange(indi , (indi.x + 16) ,(indi.y + 48),'g' ,' ' , 1); //смена по коду  0 - до , 1 - после
      BlockChange(indi , (indi.x + 16) ,(indi.y + 16),'g' ,' ' , 0); //смена по коду   0 - до , 1 - после
      BlockChange(indi , (indi.x + 16) ,(indi.y + 48),'g' ,' ' , 0); //смена по коду   0 - до , 1 - после
    }

    if (InBlock(indi,'a')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      BlockChange(indi , (indi.x + 16) ,(indi.y + 16),'a' ,'S' , 1); //смена по коду   0 - до , 1 - после
      BlockChange(indi , (indi.x + 16) ,(indi.y + 48),'a' ,'S' , 1); //смена по коду  0 - до , 1 - после
    }

    if (InBlock(indi,'s')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      BlockChange(indi , (indi.x + 16) ,(indi.y + 16),'s' ,'S' , 1); //смена по коду   0 - до , 1 - после
      BlockChange(indi , (indi.x + 16) ,(indi.y + 48),'s' ,'S' , 1); //смена по коду  0 - до , 1 - после
      BlockChange(indi , (indi.x + 16) ,(indi.y + 16),'s' ,'S' , 0); //смена по коду   0 - до , 1 - после
      BlockChange(indi , (indi.x + 16) ,(indi.y + 48),'s' ,'S' , 0); //смена по коду  0 - до , 1 - после
    }

    if (InBlock(o,'S')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      o.hp = 0;
      deathlist.push(o);
      characters.splice(i,1);
    }

    if (InBlock(o,'L')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      o.hp = 0;
      deathlist.push(o);
      characters.splice(i,1);
    }

    if (InBlock(indi,'C')) {  //проверка на Фейк-блок и его последующее уничтожениеж
      BlockChange(indi ,(indi.x + 16) ,(indi.y + 16),'C' ,' ' , 1); //смена по коду   0 - до , 1 - после
      BlockChange(indi ,(indi.x + 16) ,(indi.y + 48),'C' ,' ' , 1); //смена по коду  0 - до , 1 - после
      BlockChange(indi , (indi.x + 16) ,(indi.y + 16),'C' ,' ' , 0); //смена по коду   0 - до , 1 - после
      BlockChange(indi , (indi.x + 16) ,(indi.y + 48),'C' ,' ' , 0); //смена по коду   0 - до , 1 - после
      curLevel.currentCoins++;
    }

    // if (InBlock(indi,'D')) {  //проверка на Фейк-блок и его последующее уничтожениеж
    //   BlockChange(indi , (indi.x + 16) ,(indi.y + 16),'D' ,' ' , 1); //смена по коду   0 - до , 1 - после
    //   BlockChange(indi , (indi.x + 16) ,(indi.y + 48),'D' ,' ' , 1); //смена по коду  0 - до , 1 - после
    // }
  }
}
