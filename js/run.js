const run = (DD) => {
    TestL = new Image();
    TestR = new Image();
    TestL.src = "images/hero/HeroL.png";
    TestR.src = "images/hero/HeroR.png";
    if (!OnGround(indi)) { //проверка на нахождение в воздухе
      if (OnCeil(indi) && (indi.heroDY >= 0)) {
        indi.heroDY = -0.02;
      }
      indi.airTime ++;
      indi.heroDY -= 0.02;
    } else {
      indi.airTime = 0;
      if (indi.heroDY < 0) {
        indi.heroDY = 0;
      }
    }
    Blocks();
    // if (InBlock(indi,'g')) {  //проверка на Фейк-блок и его последующее уничтожениеж
    //   BlockChange(indi , (indi.x + 16) ,(indi.y + 16),'g' ,' ' , 1); //смена по коду   0 - до , 1 - после
    //   BlockChange(indi , (indi.x + 16) ,(indi.y + 48),'g' ,' ' , 1); //смена по коду  0 - до , 1 - после
    // }
    //
    //
    //
    // if (InBlock(indi,'s')) {  //проверка на Фейк-блок и его последующее уничтожениеж
    //   BlockChange(indi , (indi.x + 16) ,(indi.y + 16),'s' ,'S' , 1); //смена по коду   0 - до , 1 - после
    //   BlockChange(indi , (indi.x + 16) ,(indi.y + 48),'s' ,'S' , 1); //смена по коду  0 - до , 1 - после
    // }
    //
    // if (InBlock(indi,'C')) {  //проверка на Фейк-блок и его последующее уничтожениеж
    //   BlockChange(indi ,(indi.x + 16) ,(indi.y + 16),'C' ,' ' , 0); //смена по коду   0 - до , 1 - после
    //   BlockChange(indi ,(indi.x + 16) ,(indi.y + 48),'C' ,' ' , 0); //смена по коду  0 - до , 1 - после
    //   curLevel.currentCoins ++;
    // }

    if (spacePressed && OnGround(indi) ) {
      indi.shootTime = 2.15;
    }

    if (indi.shootTime >= 0) {
      if (indi.orientation == 'r') {
        indi.hero.src = "images/hero/shootAnimR.png";
      }else {
        indi.hero.src = "images/hero/shootAnimL.png";
      }
      ctx.drawImage(indi.hero , (((~~indi.shootTime) * 44) % 132) ,0 ,44 ,88 , NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 64 ); // анимация бега
      indi.shootTime -= 0.01;
    }else {

      //Ждем разверток для анимации,пока что так
      if(rightPressed && leftPressed) {
        if (indi.orientation == 'r') {
          ctx.drawImage(TestR ,NN[0] *  (indi.x + DD[0] + FF[0]) ,NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 64 );
        } else {
          ctx.drawImage(TestL ,NN[0] *  (indi.x + DD[0] + FF[0]) ,NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 64 );
        }
      } else {
        if (rightPressed) {
          if (!OnRight(indi)) {
            indi.hero.src = "images/hero/runAnimR.png";
            if (OnGround(indi)) {  // проверка на состояние в воздухе
              ctx.drawImage(indi.hero , (((~~indi.posision) * 66) % 396) ,0 ,66 ,88 , NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 ); // анимация бега
              // ctx.drawImage(TestR , (indi.x + DD[0]) , (indi.y + DD[1]),32 ,64 );
            } else {
                // ctx.drawImage(indi.hero ,480 ,512 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация падения
                indi.hero.src = "images/hero/fallAnimR.png";
                ctx.drawImage(indi.hero , (((~~indi.posision) * 66) % 264) ,0 ,66 ,88 , NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 );
            }
            indi.posision += 0.03; // смена картинок для бега
            indi.x ++;
            if ((indi.x + DD[0] + FF[0]) >= 1280 * 3 / 4 / NN[0]) {
              backGroundParse(1,0,DD); //сдвиг фона
            }
            indi.orientation = "r"; // смена ориентации
          } else {
            if (!OnGround(indi)) {
              indi.hero.src = "images/hero/fallAnimR.png";
              ctx.drawImage(indi.hero , (((~~indi.posision) * 66) % 264) ,0 ,66 ,88 , NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 );
            }else {
              indi.hero.src = "images/hero/heroWallL.png";
              ctx.drawImage(indi.hero, NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 64 );
            }
             /*if (airTime>30) {
               indi.y += 2;
             }
             ctx.drawImage(indi.hero ,160 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация "столкновение со стеной"*/
             // indi.hero.src = "images/hero/heroWallL.png";
             // ctx.drawImage(indi.hero , (((~~indi.posision) * 66) % 264) ,0 ,66 ,88 , NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 );
          }
        }
        if (leftPressed) {
          if (!OnLeft(indi)) {
            indi.hero.src = "images/hero/runAnimL.png";
            if (OnGround(indi)) {  // проверка на состояние в воздухе
              ctx.drawImage(indi.hero , (((~~indi.posision) * 66) % 396) ,0 ,66 ,88 ,NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 ); // анимация бега
              // ctx.drawImage(TestL, (indi.x + DD[0]), (indi.y + DD[1]), 32, 64);
            } else {
                // ctx.drawImage(indi.hero ,480 ,512 ,160 ,200 , indi.x , indi.y , 80 , 80); // анимация падения
                indi.hero.src = "images/hero/fallAnimL.png";
                ctx.drawImage(indi.hero , (((~~indi.posision) * 66) % 264) ,0 ,66 ,88 , NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 );
            }
            indi.posision += 0.03; // смена картинок для бега
            indi.x --;
            if ((indi.x+ DD[0] + FF[0]) <= canvas.width / 4 / NN[0]) {
              backGroundParse(-1,0,DD);
            }
            indi.orientation = "l"; // смена ориентации
          } else {
            if (!OnGround(indi)) {
              indi.hero.src = "images/hero/fallAnimL.png";
              ctx.drawImage(indi.hero , (((~~indi.posision) * 66) % 264) ,0 ,66 ,88 , NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 );
            }else {
              indi.hero.src = "images/hero/heroWallR.png";
              ctx.drawImage(indi.hero, NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 64 );
            }
          }
        }
      }

      //Если нажат space и персонаж на земле то гравитация
      //равна 5 (новый вариант 1.6)
      if (upPressed && OnGround(indi) && !OnCeil(indi)) {
          indi.heroDY = 2;
          indi.airTime = 0; // начало прыжка
      }




      //отрисовка сосояния покоя
      if (!rightPressed && !leftPressed) {
          if (indi.orientation == "r") {
              indi.hero.src = "images/hero/HeroR.png";
              if (OnGround(indi)) {  // проверка на состояние в воздухе(при изменение физики требует доработки)
                // ctx.drawImage(indi.hero ,0 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80); // состояние покоя
                ctx.drawImage(TestR ,NN[0] *  (indi.x + DD[0] + FF[0]) ,NN[1] * (indi.y + DD[1] + FF[1]),NN[0] * 32 ,NN[1] * 64  );
              } else {
                indi.hero.src = "images/hero/fallAnimR.png";
                ctx.drawImage(indi.hero , (((~~indi.posision) * 66) % 264) ,0 ,66 ,88 , NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 );
                if (indi.heroDY <= -1.5) {
                  indi.posision += 0.03
                }
              }
          } else {
              indi.hero.src = "images/hero/HeroL.png";
                if (OnGround(indi)) {  // проверка на состояние в воздухе(при изменение физики требует доработки)
                  // ctx.drawImage(indi.hero ,800 ,296 ,160 ,200 , indi.x , indi.y , 80 , 80); // состояние покоя
                  ctx.drawImage(TestL ,NN[0] *  (indi.x + DD[0] + FF[0]) ,NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 64  );
                } else {
                  indi.hero.src = "images/hero/fallAnimL.png";
                  ctx.drawImage(indi.hero , (((~~indi.posision) * 66) % 264) ,0 ,66 ,88 , NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 );
                  if (indi.heroDY <= -1.5) {
                    indi.posision += 0.03
                  }
                }
          }
      }

  }


    indi.y -= indi.heroDY; //гравитационное смещение

    if ((indi.y + DD[1] + FF[1]) > (canvas.height / 2) / NN[1]) {
      backGroundParse(0, - indi.heroDY,DD); // коректировка фона по высоте
    }

   if ((indi.y + DD[1] + FF[1]) < (canvas.height / 2) / NN[1]) {
      backGroundParse(0, - indi.heroDY,DD); // коректировка фона по высоте
    }

    // if (indi.orientation == 'l') {
    //   indi.hero.src = "images/hero/HeroL.png";
    // } else {
    //   indi.hero.src = "images/hero/HeroR.png";
    // }
}
