function run(DD){
    /*
        Функция физика - отвечает за анимацию,
        передвижение перса
    */

    //если не нажата ни одна клавиша и перс не в состоянии покоя
    //то оставить его в состоянии покоя
    //в направление куда смотрел
    TestL = new Image();
    TestR = new Image();
    TestL.src = "images/HeroL.png";
    TestR.src = "images/HeroR.png";


    if (! OnGround(indi) ) { //проверка на нахождение в воздухе
      if (OnCeil(indi) && (indi.heroDY >= 0) ){
        indi.heroDY = -0.02;
      }
      indi.airTime ++;
        indi.heroDY -= 0.02;
    }else {
      indi.airTime = 0;
      if (indi.heroDY < 0) {
        indi.heroDY = 0;
      }
    }

    if (InBlock(indi,'g')) {
      BlockChange((indi.x + 16) ,(indi.y + 16),' ' , 1);
      BlockChange((indi.x + 16) ,(indi.y + 48),' ' , 1);
    }

    //Ждем разверток для анимации,пока что так
    if(rightPressed && leftPressed){
      er = true
      // ctx.drawImage(indi.hero ,800 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80);
      ctx.drawImage(TestR , (indi.x + DD[0]) , (indi.y + DD[1]) );
    }else {
      if(rightPressed){
        er = true;
        if (! OnRight(indi) ) {
          indi.hero.src = "images/runR.png";
          if (indi.airTime<100) {  // проверка на состояние в воздухе(при изменение физики требует доработки)
            // ctx.drawImage(indi.hero ,((~~indi.posision) * 160) % 960 ,0 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация бега
            ctx.drawImage(TestR , (indi.x + DD[0]) , (indi.y + DD[1]) );
          }else {
              // ctx.drawImage(indi.hero ,480 ,512 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация падения
              ctx.drawImage(TestR , (indi.x + DD[0]) , (indi.y + DD[1]) );
          }
          indi.posision += 0.03; // смена картинок для бега
          indi.x ++;
          if ( (indi.x + DD[0]) >= 899 - indi.width) {
            backGroundParse(1,0,DD); //сдвиг фона
          }
          indi.orientation = "r"; // смена ориентации
        }else {
          // if (airTime>30) {
          //   indi.y += 2;
          // }
          // ctx.drawImage(indi.hero ,160 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация "столкновение со стеной"
          ctx.drawImage(TestR , (indi.x + DD[0]), (indi.y + DD[1]) );
        }
      }
      if(leftPressed){
        er = true;
        if (! OnLeft(indi) ){
          indi.hero.src = "images/runL.png";
          if (indi.airTime < 100) {  // проверка на состояние в воздухе(при изменение физики требует доработки)
            // ctx.drawImage(indi.hero ,800 - ((~~indi.posision) * 160) % 960 ,0 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация бега
            ctx.drawImage(TestL , (indi.x + DD[0]) , (indi.y + DD[1]) );
          }else {
              // ctx.drawImage(indi.hero ,480 ,512 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация падения
              ctx.drawImage(TestL , (indi.x + DD[0]) , (indi.y + DD[1]) );
          }
          indi.posision -= 0.03; // смена картинок для бега
          indi.x --;
          if ( (indi.x+ DD[0]) <= 300) {
            backGroundParse(-1,0,DD);
          }
          indi.orientation = "l"; // смена ориентации
        } else {
          // ctx.drawImage(indi.hero ,640 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация "столкновение со стеной"
          ctx.drawImage(TestL , (indi.x + DD[0]) , (indi.y + DD[1]) );
        }
      }
  }


  // indi.collision();

    //Если нажат space и персонаж на земле то гравитация
    //равна 5 (новый вариант 1.6)
    if(spacePressed && OnGround(indi) && !OnCeil(indi)){
        indi.heroDY = 2;
        indi.airTime = 0; // начало прыжка
    }


    if(!rightPressed && !leftPressed){
      er = true;
        if(indi.orientation == "r"){
            indi.hero.src = "images/runR.png";
            if (indi.airTime<125) {  // проверка на состояние в воздухе(при изменение физики требует доработки)
              // ctx.drawImage(indi.hero ,0 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80); // состояние покоя
              ctx.drawImage(TestR , (indi.x + DD[0]) , (indi.y + DD[1]) );
            } else {
              // ctx.drawImage(indi.hero ,480 ,512 ,160 ,200 , indi.x , indi.y , 80 , 80); // падение в состоянии покоя
              ctx.drawImage(TestR , (indi.x + DD[0]) , (indi.y + DD[1]) );
            }
        } else {
            indi.hero.src = "images/runL.png";
              if (indi.airTime<125) {  // проверка на состояние в воздухе(при изменение физики требует доработки)
                // ctx.drawImage(indi.hero ,800 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80); // состояние покоя
                ctx.drawImage(TestL , (indi.x + DD[0]) , (indi.y + DD[1]) );
              } else {
                // ctx.drawImage(indi.hero ,480 ,512 ,160 ,200 , indi.x , indi.y , 80 , 80); // падение в состоянии покоя
                ctx.drawImage(TestL , (indi.x + DD[0]) , (indi.y + DD[1]) );
              }
        }
    }


    indi.y -= indi.heroDY;


    // if (indi.x > ((Level * 1280) + 1152) ) {
    //   Level++;
    // }


    if ((indi.y+ DD[1]) > 540) {
      backGroundParse(0, - indi.heroDY,DD);
    }


    if ((indi.y+ DD[1]) < 150) {
      backGroundParse(0, - indi.heroDY,DD);
    }

}
