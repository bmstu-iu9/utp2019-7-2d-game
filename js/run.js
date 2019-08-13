function run(){
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


    function IsCoin(Object) {
      var j = ~~( Object.x / 32); //Целочисленное деление )) Нашел в инете
      var i = ~~( Object.y / 32);
      if ((map[ i ] [ j ] == 'C') || (map[ i + 1 ] [ j ] == 'C')) {
        // TestL.src = "images/coin.png";
        // map[ i ] [ j ] = ' ';
        for (var i = 0; i < blocks.length; i++) {
          // if ((blocks[i].x == j * 32) && ((blocks[i].y == i * 32 ) || (blocks[i].y == (i + 1) * 32 ))){
          if ((blocks[i].id == 'C')&&(blocks[i].x==j*32)) {
            blocks.splice(i,1);
            curLevel.currentCoins++;
            i--;
          }
        }
      }
    }

    IsCoin(indi);


    function OnGround(Object) {
      var j = ~~( Object.x / 32); //Целочисленное деление )) Нашел в инете
      var i = ~~( Object.y  / 32);
      if ((map[ i + 2 ] [ j ] == 'G') || (map[ i + 2 ] [ j + 1 ] == 'G')) {
        if (Object.heroDY <= 0) {
          Object.y = i *32;
        }
        return true;
      }else {
        return false;
      }
    }

    function OnLeft(Object){
      var j = ~~((Object.x - 1) / 32); //Целочисленное деление )) Нашел в инете
      var i = ~~(Object.y / 32);
      var i2 = ~~((Object.y - 1) / 32);
      return ( (map[ i + 1  ] [ j  ] == 'G') || (map[ i ] [ j  ] == 'G') || (map[ i2 + 2 ] [ j  ] == 'G') );
    }


    function OnRight(Object){
      var j = ~~((Object.x + 1) / 32); //Целочисленное деление )) Нашел в инете
      var i = ~~(Object.y / 32);
      var i2 = ~~((Object.y - 1) / 32);
      return ( (map[ i + 1 ] [ j + 1 ] == 'G') || (map[ i] [ j + 1 ] == 'G') || (map[ i2 + 2 ] [ j + 1 ] == 'G') );
    }


    function OnCeil(Object){
      var j = ~~(Object.x / 32); //Целочисленное деление )) Нашел в инете
      var i = ~~(Object.y / 32);
      var i2 = ~~((Object.y + 1) / 32);
      if (i >= 1) {
        return ((map[ i  ] [ j ] == 'G') || (map[ i ] [ j + 1 ] == 'G'));
      } else {
        return true;
      }
    }

    var er = false; //флажок для вырожденных ситуаций

    if (! OnGround(indi) ) { //проверка на нахождение в воздухе
      if (OnCeil(indi) && (indi.heroDY >= 0) ){
        indi.heroDY = -0.01;
      }
      indi.airTime ++;
        indi.heroDY -= 0.01;
    }else {
      indi.airTime = 0;
      if (indi.heroDY < 0) {
        indi.heroDY = 0;
      }
    }


    if(rightPressed && leftPressed){
      er = true
      // ctx.drawImage(indi.hero ,800 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80);
      ctx.drawImage(TestR , (indi.x + indi.dX) , (indi.y + indi.dY) );
    }else {
      if(rightPressed){
        er = true;
        // var j = ~~((indi.x + 30) / 32); //Целочисленное деление )) Нашел в инете
      	// var i = ~~((indi.y + 75) / 32);
        // if(map[i - 1][j + 1] != 'G' && map[i][j + 1] != 'G'){
        if (! OnRight(indi) ) {
          indi.hero.src = "images/runR.png";
          if (indi.airTime<100) {  // проверка на состояние в воздухе(при изменение физики требует доработки)
            // ctx.drawImage(indi.hero ,((~~indi.posision) * 160) % 960 ,0 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация бега
            ctx.drawImage(TestR , (indi.x + indi.dX) , (indi.y + indi.dY) );
          }else {
              // ctx.drawImage(indi.hero ,480 ,512 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация падения
              ctx.drawImage(TestR , (indi.x + indi.dX) , (indi.y + indi.dY) );
          }
          indi.posision += 0.03; // смена картинок для бега
          if ( (indi.x + indi.dX) <899 - indi.width) {
            indi.x ++;
          }else {
            indi.x ++;
            indi.dX --;
            backGroundParse(1,0);
          }
          indi.orientation = "r"; // смена ориентации
        }else {
          // if (airTime>30) {
          //   indi.y += 2;
          // }
          // ctx.drawImage(indi.hero ,160 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация "столкновение со стеной"
          ctx.drawImage(TestR , (indi.x + indi.dX), (indi.y + indi.dY) );
        }
      }
      if(leftPressed){
        er = true;
        // var j = ~~((indi.x + 30) / 32); //Целочисленное деление )) Нашел в инете
      	// var i = ~~((indi.y + 75) / 32);
        // var j = ~~(Object.x / 32); //Целочисленное деление )) Нашел в инете
        // var i = ~~(Object.y / 32);
        // if(map[i - 1][j] != 'G' && map[i][j] != 'G'){
        if (! OnLeft(indi) ){
          indi.hero.src = "images/runL.png";
          if (indi.airTime < 100) {  // проверка на состояние в воздухе(при изменение физики требует доработки)
            // ctx.drawImage(indi.hero ,800 - ((~~indi.posision) * 160) % 960 ,0 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация бега
            ctx.drawImage(TestL , (indi.x + indi.dX) , (indi.y + indi.dY) );
          }else {
              // ctx.drawImage(indi.hero ,480 ,512 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация падения
              ctx.drawImage(TestL , (indi.x + indi.dX) , (indi.y + indi.dY) );
          }
          indi.posision -= 0.03; // смена картинок для бега
          if ( (indi.x+ indi.dX) > 300) {
            indi.x --;
          }else {
            indi.x --;
            indi.dX ++;
            backGroundParse(-1,0);
          }
          indi.orientation = "l"; // смена ориентации
        } else {
          // ctx.drawImage(indi.hero ,640 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация "столкновение со стеной"
          ctx.drawImage(TestL , (indi.x + indi.dX) , (indi.y + indi.dY) );
        }
      }
  }


  // indi.collision();

    //Если нажат space и персонаж на земле то гравитация
    //равна 5 (новый вариант 1.6)
    if(spacePressed && OnGround(indi) && !OnCeil(indi)){
        indi.heroDY = 1.6;
        indi.airTime = 0; // начало прыжка
    }


    if(!rightPressed && !leftPressed){
      er = true;
        if(indi.orientation == "r"){
            indi.hero.src = "images/runR.png";
            if (indi.airTime<125) {  // проверка на состояние в воздухе(при изменение физики требует доработки)
              // ctx.drawImage(indi.hero ,0 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80); // состояние покоя
              ctx.drawImage(TestR , (indi.x + indi.dX) , (indi.y + indi.dY) );
            } else {
              // ctx.drawImage(indi.hero ,480 ,512 ,160 ,200 , indi.x , indi.y , 80 , 80); // падение в состоянии покоя
              ctx.drawImage(TestR , (indi.x + indi.dX) , (indi.y + indi.dY) );
            }
        } else {
            indi.hero.src = "images/runL.png";
              if (indi.airTime<125) {  // проверка на состояние в воздухе(при изменение физики требует доработки)
                // ctx.drawImage(indi.hero ,800 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80); // состояние покоя
                ctx.drawImage(TestL , (indi.x + indi.dX) , (indi.y + indi.dY) );
              } else {
                // ctx.drawImage(indi.hero ,480 ,512 ,160 ,200 , indi.x , indi.y , 80 , 80); // падение в состоянии покоя
                ctx.drawImage(TestL , (indi.x + indi.dX) , (indi.y + indi.dY) );
              }
        }
       // indi.stage = 0;
    }


    if (!er) { //при ошибке - покой
      ctx.drawImage(indi.hero , indi.x , indi.y , 30 , 75);
      if(indi.orientation == "r"){
        ctx.drawImage(indi.hero ,0 ,256 ,160 ,200 , indi.x , indi.y , 30 , 75);
      } else {
        ctx.drawImage(indi.hero ,800 ,256 ,160 ,200 , indi.x , indi.y , 30 , 75);
      }
    }

    indi.y -= indi.heroDY;
    if ((indi.y+ indi.dY) > 540) {
      backGroundParse(0, - indi.heroDY);
      indi.dY += indi.heroDY;
    }


    if ((indi.y+ indi.dY) < 150) {
      backGroundParse(0, - indi.heroDY);
      indi.dY += indi.heroDY;
    }

}
