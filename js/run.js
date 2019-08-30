<<<<<<< HEAD

const run = () => {
    TestL = new Image();
    TestR = new Image();
    TestL.src = "images/hero/HeroL.png";
    TestR.src = "images/hero/HeroR.png";
=======
const drawHero = () => {
>>>>>>> 1ae29fdba3a4c94fd9781eac3c21553e7396c284
    if (!OnGround(indi)) { //проверка на нахождение в воздухе
      if (OnCeil(indi) && (indi.heroDY >= 0)) {
        indi.heroDY = -0.25;
      }
      indi.airTime ++;
      indi.heroDY -= 0.25;
    } else {
      indi.airTime = 0;
      if (indi.heroDY < 0) {
        indi.heroDY = 0;
      }
    }
<<<<<<< HEAD
    Blocks();


    if ( spacePressed && OnGround(indi) && (indi.shootTime <= 0)  ) {
=======
    blockCheck();
    if (spacePressed && OnGround(indi) && (indi.shootTime <= 0)) {
>>>>>>> 1ae29fdba3a4c94fd9781eac3c21553e7396c284
      indi.shootTime = 2.15;
      shoot(indi);
      if (indi.orientation == 'r') { //кто-нибудь чекните этот баг (комментните эту строку)
        indi.x = indi.x - 2;  //кто-нибудь чекните этот баг (комментните эту строку)
<<<<<<< HEAD
      }else { //кто-нибудь чекните этот баг (комментните эту строку)
        indi.x = indi.x + 2;  //кто-нибудь чекните этот баг (комментните эту строку)
      } //кто-нибудь чекните этот баг (комментните эту строку)
    }

=======
      } else { //кто-нибудь чекните этот баг (комментните эту строку)
        indi.x = indi.x + 2;  //кто-нибудь чекните этот баг (комментните эту строку)
      } //кто-нибудь чекните этот баг (комментните эту строку)
    }
>>>>>>> 1ae29fdba3a4c94fd9781eac3c21553e7396c284
    if (indi.shootTime > 0) {
      if (indi.shootTime < 2.15) {
        indi.shoot = true;
      }
      if (indi.orientation == 'r') {
<<<<<<< HEAD
        indi.hero.src = "images/hero/shootAnimR.png";
      }else {
        indi.hero.src = "images/hero/shootAnimL.png";
      }
      ctx.drawImage(indi.hero , (((~~indi.shootTime) * 44) % 132) ,0 ,44 ,88 , NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 64 ); // анимация бега
      indi.shootTime -= 0.01;
    } else {
      indi.shootTime = 0;
      // indi.shoot = true;
      //Ждем разверток для анимации,пока что так
=======
        indi.texture.src = "images/hero/shootAnimR.png";
      } else {
        indi.texture.src = "images/hero/shootAnimL.png";
      }
      ctx.drawImage(indi.texture, (((~~indi.shootTime)*44)%132), 0, 44, 88, NN[0]*(indi.x + DD[0] + FF[0]), NN[1]*(indi.y + DD[1] + FF[1]), NN[0]*32, NN[1]*64); // анимация бега
      indi.shootTime -= 0.1;
    } else {
      indi.shootTime = 0;
>>>>>>> 1ae29fdba3a4c94fd9781eac3c21553e7396c284
      if(rightPressed && leftPressed) {
        if (indi.orientation == 'r') {
          indi.texture.src = "images/hero/HeroR.png";
          ctx.drawImage(indi.texture, NN[0]*(indi.x + DD[0] + FF[0]), NN[1]*(indi.y + DD[1] + FF[1]), NN[0]*32, NN[1]*64);
        } else {
          indi.texture.src = "images/hero/HeroL.png";
          ctx.drawImage(indi.texture, NN[0]*(indi.x + DD[0] + FF[0]), NN[1]*(indi.y + DD[1] + FF[1]), NN[0]*32, NN[1]*64);
        }
      } else {
        if (rightPressed) {
          if (!OnRight(indi)) {
            if (OnGround(indi)) {  // проверка на состояние в воздухе
              indi.texture.src = "images/hero/runAnimR.png";
              ctx.drawImage(indi.texture, (((~~indi.posision)*66)%396), 0, 66, 88, NN[0]*(indi.x + DD[0] + FF[0]), NN[1]*(indi.y + DD[1] + FF[1]), NN[0]*44, NN[1]*64); // анимация бега
            } else {
              indi.texture.src = "images/hero/fallAnimR.png";
              ctx.drawImage(indi.texture, (((~~indi.posision)*66)%264), 0, 66, 88, NN[0]*(indi.x + DD[0] + FF[0]), NN[1]*(indi.y + DD[1] + FF[1]), NN[0]*44, NN[1]*64); // анимация прыжка
            }
            indi.posision += 0.13; // смена картинок для бега
            indi.x += indi.speed;
            if ((indi.x + DD[0] + FF[0]) >= 1280 * 3 / 4 / NN[0]) {
              backGroundParse(indi.speed,0,DD); //сдвиг фона
            }
            indi.orientation = "r"; // смена ориентации
          } else {
            if (!OnGround(indi)) {
              indi.texture.src = "images/hero/fallAnimR.png";
              ctx.drawImage(indi.texture, (((~~indi.posision)*66)%264), 0, 66, 88, NN[0]*(indi.x + DD[0] + FF[0]), NN[1]*(indi.y + DD[1] + FF[1]), NN[0]*44, NN[1]*64); // анимация прыжка
            } else {
              indi.texture.src = "images/hero/heroWallL.png";
              ctx.drawImage(indi.texture, NN[0]*(indi.x + DD[0] + FF[0]), NN[1]*(indi.y + DD[1] + FF[1]), NN[0]*32, NN[1]*64);
            }
          }
        }
        if (leftPressed) {
          if (!OnLeft(indi)) {
            indi.texture.src = "images/hero/runAnimL.png";
            if (OnGround(indi)) {  // проверка на состояние в воздухе
              ctx.drawImage(indi.texture , (((~~indi.posision) * 66) % 396) ,0 ,66 ,88 ,NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 ); // анимация бега
            } else {
              indi.texture.src = "images/hero/fallAnimL.png";
              ctx.drawImage(indi.texture , (((~~indi.posision) * 66) % 264) ,0 ,66 ,88 , NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 );
            }
            indi.posision += 0.13; // смена картинок для бега
            indi.x -= indi.speed;;
            if ((indi.x+ DD[0] + FF[0]) <= canvas.width / 4 / NN[0]) {
              backGroundParse(-indi.speed,0,DD);
            }
            indi.orientation = "l"; // смена ориентаци;
          } else {
            if (!OnGround(indi)) {
              indi.texture.src = "images/hero/fallAnimL.png";
              ctx.drawImage(indi.texture , (((~~indi.posision) * 66) % 264) ,0 ,66 ,88 , NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 );
            } else {
              indi.texture.src = "images/hero/heroWallR.png";
              ctx.drawImage(indi.texture, NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 64 );
            }
          }
        }
      }

      //Если нажат space и персонаж на земле то гравитация
      //равна 5 (новый вариант 1.6)
      if (upPressed && OnGround(indi) && !OnCeil(indi)) {
        indi.heroDY = 7;
        indi.airTime = 0; // начало прыжка
      }

      //отрисовка сосояния покоя
      if (!rightPressed && !leftPressed) {
        if (indi.orientation == "r") {
          indi.texture.src = "images/hero/HeroR.png";
          if (OnGround(indi)) {  // проверка на состояние в воздухе(при изменение физики требует доработки)
            ctx.drawImage(indi.texture, NN[0]*(indi.x + DD[0] + FF[0]), NN[1]*(indi.y + DD[1] + FF[1]), NN[0]*32, NN[1]*64);
          } else {
            indi.texture.src = "images/hero/fallAnimR.png";
            ctx.drawImage(indi.texture , (((~~indi.posision) * 66) % 264) ,0 ,66 ,88 , NN[0] * (indi.x + DD[0] + FF[0]),NN[1] * (indi.y + DD[1] + FF[1]) ,NN[0] * 44 ,NN[1] * 64 );
            if (indi.heroDY <= -1.5) {
              indi.posision += 0.13;
            }
          }
        } else {
          indi.texture.src = "images/hero/HeroL.png";
          if (OnGround(indi)) {  // проверка на состояние в воздухе(при изменение физики требует доработки)
            ctx.drawImage(indi.texture, NN[0]*(indi.x + DD[0] + FF[0]), NN[1]*(indi.y + DD[1] + FF[1]), NN[0]*32, NN[1]*64);
          } else {
            indi.texture.src = "images/hero/fallAnimL.png";
            ctx.drawImage(indi.texture, (((~~indi.posision) * 66) % 264), 0, 66, 88, NN[0]*(indi.x + DD[0] + FF[0]), NN[1]*(indi.y + DD[1] + FF[1]), NN[0]*44, NN[1]*64);
            if (indi.heroDY <= -1.5) {
              indi.posision += 0.13;
            }
          }
        }
      }
<<<<<<< HEAD

  }



=======
    }
>>>>>>> 1ae29fdba3a4c94fd9781eac3c21553e7396c284
    indi.y -= indi.heroDY; //гравитационное смещение

    if ((indi.y + DD[1] + FF[1]) > (canvas.height/2)/NN[1]) {
      backGroundParse(0, -indi.heroDY, DD); // коректировка фона по высоте
    }

   if ((indi.y + DD[1] + FF[1]) < (canvas.height/2)/NN[1]) {
      backGroundParse(0, -indi.heroDY, DD); // коректировка фона по высоте
    }
}
