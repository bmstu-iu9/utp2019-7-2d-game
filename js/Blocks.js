const Blocks = (DD) => {
  if (InBlock(indi,'g')) {  //проверка на Фейк-блок и его последующее уничтожениеж
    BlockChange(indi , (indi.x + 16) ,(indi.y + 16),'g' ,' ' , 1); //смена по коду   0 - до , 1 - после
    BlockChange(indi , (indi.x + 16) ,(indi.y + 48),'g' ,' ' , 1); //смена по коду  0 - до , 1 - после
  }

  if (InBlock(indi,'a')) {  //проверка на Фейк-блок и его последующее уничтожениеж
    BlockChange(indi , (indi.x + 16) ,(indi.y + 16),'a' ,'S' , 1); //смена по коду   0 - до , 1 - после
    BlockChange(indi , (indi.x + 16) ,(indi.y + 48),'a' ,'S' , 1); //смена по коду  0 - до , 1 - после
  }

  if (InBlock(indi,'s')) {  //проверка на Фейк-блок и его последующее уничтожениеж
    BlockChange(indi , (indi.x + 16) ,(indi.y + 16),'s' ,'S' , 1); //смена по коду   0 - до , 1 - после
    BlockChange(indi , (indi.x + 16) ,(indi.y + 48),'s' ,'S' , 1); //смена по коду  0 - до , 1 - после
  }

  if (InBlock(indi,'C')) {  //проверка на Фейк-блок и его последующее уничтожениеж
    BlockChange(indi ,(indi.x + 16) ,(indi.y + 16),'C' ,' ' , 1); //смена по коду   0 - до , 1 - после
    BlockChange(indi ,(indi.x + 16) ,(indi.y + 48),'C' ,' ' , 1); //смена по коду  0 - до , 1 - после
  }

}
