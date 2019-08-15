/*Функция физика - отвечает за анимацию,
    передвижение перса*/

const physics = () => {
    if (rightPressed) {
    	let j = ~~((indi.x + 30) / 32); //Целочисленное деление )) Нашел в инете
    	let i = ~~((indi.y + 75) / 32);
    	if (map[i - 1][j + 1] != 'G' && map[i][j + 1] != 'G'){
        	indi.x += 1.5;
        	if (indi.stage == 0) {
            	indi.hero.src = "images/hero/HeroR.png";
            	indi.prevStage = 0;
            	indi.stage = 1;
        	} else if (indi.stage == 1 && indi.prevStage == 0) {
          		indi.hero.src = "images/hero/HeroR.png";
          		indi.stage = 2;
          		indi.prevStage = 1;
        	} else if (indi.stage == 2) {
            	indi.hero.src = "images/hero/HeroR.png";
            	indi.stage = 1;
            	indi.prevStage = 2;
        	} else if (indi.stage == 1 && indi.prevStage == 2) {
            	indi.hero.src = "images/hero/HeroR.png";
            	indi.prevStage = 0;
            	indi.stage = 0;
        	}
    	} else {
    		indi.hero.src = "images/hero/HeroR.png";
    		indi.prevStage = 0;
    		indi.stage = 0;
    	}
    	indi.direction = "right";
    }
    if (leftPressed){
    	let j = ~~((indi.x + 30) / 32); //Целочисленное деление )) Нашел в инете
    	let i = ~~((indi.y + 75) / 32);
    	if (map[i - 1][j] != 'G' && map[i][j] != 'G') {
        	indi.x -= 1.5;
        	if (indi.stage == 0){
            	indi.hero.src = "images/hero/HeroL.png";
            	indi.prevStage = 0;
            	indi.stage = 1;
        	} else if (indi.stage == 1 && indi.prevStage == 0) {
          		indi.hero.src = "images/hero/HeroL.png";
          		indi.stage = 2;
          		indi.prevStage = 1;
        	} else if (indi.stage == 2) {
            	indi.hero.src = "images/hero/HeroL.png";
            	indi.stage = 1;
            	indi.prevStage = 2;
        	} else if (indi.stage == 1 && indi.prevStage == 2) {
            	indi.hero.src = "images/hero/HeroL.png";
            	indi.prevStage = 0;
            	indi.stage = 0;
        	}

    	} else {
    		indi.hero.src = "images/hero/HeroL.png";
            indi.prevStage = 0;
            indi.stage = 0;
    	}
        indi.direction = "left";
    }

    indi.collision();

    /*Если нажат space и персонаж на земле то гравитация
    равна 5*/
    if (spacePressed && indi.OnGround) {
        indi.heroDY = 5;
    }


    /*если не нажата ни одна клавиша и персонаж не в состоянии покоя,
    то оставить его в состоянии покоя в текущем направлении*/
    if (!rightPressed && !leftPressed && indi.stage != 0) {
        if (indi.direction == "right") {
            indi.hero.src = "images/hero/HeroR.png";
        } else {
            indi.hero.src = "images/hero/HeroL.png";
        }
        indi.stage = 0;
    }
}
