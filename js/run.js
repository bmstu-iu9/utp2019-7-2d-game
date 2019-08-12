function run(){
    /*
        Функция физика - отвечает за анимацию,
        передвижение перса
    */

    //если не нажата ни одна клавиша и перс не в состоянии покоя
    //то оставить его в состоянии покоя
    //в направление куда смотрел
    var er = false; //флажок для вырожденных ситуаций

    if (!indi.OnGround) { //проверка на нахождение в воздухе
      indi.airTime ++;
    }else {
      indi.airTime = 0;
    }

    if(rightPressed && leftPressed){
      er = true
      ctx.drawImage(indi.hero ,800 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80);
    }else {
      if(rightPressed){
        er = true;
        var j = ~~((indi.x + 30) / 32); //Целочисленное деление )) Нашел в инете
      	var i = ~~((indi.y + 75) / 32);
        if(map[i - 1][j + 1] != 'G' && map[i][j + 1] != 'G'){
          indi.hero.src = "images/runR.png";
          if (indi.airTime<100) {  // проверка на состояние в воздухе(при изменение физики требует доработки)
            ctx.drawImage(indi.hero ,((~~indi.posision) * 160) % 960 ,0 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация бега
          }else {
              ctx.drawImage(indi.hero ,480 ,512 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация падения
          }
          indi.posision += 0.03; // смена картинок для бега
          indi.x += 1.5;
          indi.orientation = "r"; // смена ориентации
        }else {
          ctx.drawImage(indi.hero ,160 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация "столкновение со стеной"
        }
      }
      if(leftPressed){
        er = true;
        var j = ~~((indi.x + 30) / 32); //Целочисленное деление )) Нашел в инете
      	var i = ~~((indi.y + 75) / 32);
        if(map[i - 1][j] != 'G' && map[i][j] != 'G'){
          indi.hero.src = "images/runL.png";
          if (indi.airTime<100) {  // проверка на состояние в воздухе(при изменение физики требует доработки)
            ctx.drawImage(indi.hero ,800 - ((~~indi.posision) * 160) % 800 ,0 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация бега
          }else {
              ctx.drawImage(indi.hero ,480 ,512 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация падения
          }
          indi.posision -= 0.03; // смена картинок для бега
          indi.x -= 1.5;
          indi.orientation = "l"; // смена ориентации
        } else {
          ctx.drawImage(indi.hero ,640 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация "столкновение со стеной"
        }
      }
  }


  indi.collision();

    //Если нажат space и персонаж на земле то гравитация
    //равна 5 (новый вариант 1.6)
    if(spacePressed && indi.OnGround){
        indi.heroDY = 1.6;
        indi.airTime = 0; // начало прыжка
    }


    if(!rightPressed && !leftPressed){
      er = true;
        if(indi.orientation == "r"){
            indi.hero.src = "images/runR.png";
            if (indi.airTime<125) {  // проверка на состояние в воздухе(при изменение физики требует доработки)
              ctx.drawImage(indi.hero ,0 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80); // состояние покоя
            } else {
              ctx.drawImage(indi.hero ,480 ,512 ,160 ,200 , indi.x , indi.y , 80 , 80); // падение в состоянии покоя
            }
        } else {
            indi.hero.src = "images/runL.png";
              if (indi.airTime<125) {  // проверка на состояние в воздухе(при изменение физики требует доработки)
                ctx.drawImage(indi.hero ,800 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80); // состояние покоя
              } else {
                ctx.drawImage(indi.hero ,480 ,512 ,160 ,200 , indi.x , indi.y , 80 , 80); // падение в состоянии покоя
              }
        }
       indi.stage = 0;
    }


    if (!er) { //при ошибке - покой
      if(indi.orientation == "r"){
        ctx.drawImage(indi.hero ,0 ,256 ,160 ,200 , indi.x , indi.y , 80 , 80);
      } else {
        ctx.drawImage(indi.hero ,800 ,256 ,160 ,200 , indi.x , indi.y , 80 , 80);
      }
    }

}
