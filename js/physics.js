function physics(){
    /*
        Функция физика - отвечает за анимацию,
        передвижение перса
    */
    if(rightPressed){

    	var j = ~~((indi.x + 30) / 32); //Целочисленное деление )) Нашел в инете
    	var i = ~~((indi.y + 75) / 32);

    	if(map[i - 1][j + 1] != 'G' && map[i][j + 1] != 'G'){
        	indi.x += 1.5;
        	if(indi.stage == 0){
            	indi.hero.src = "images/maingonextright.png";
            	indi.prevStage = 0;
            	indi.stage = 1;
        	} else if (indi.stage == 1 && indi.prevStage == 0){
          		indi.hero.src = "images/maingoright.png";
          		indi.stage = 2;
          		indi.prevStage = 1;
        	} else if(indi.stage == 2){
            	indi.hero.src = "images/maingonextright.png";
            	indi.stage = 1;
            	indi.prevStage = 2;
        	} else if(indi.stage == 1 && indi.prevStage == 2){
            	indi.hero.src = "images/mainpersright.png";
            	indi.prevStage = 0;
            	indi.stage = 0;
        	}
    	}else {
    		indi.hero.src = "images/mainpersright.png";
    		indi.prevStage = 0;
    		indi.stage = 0;
    	}

    	indi.direction = "right";

    }

    if(leftPressed){
    	var j = ~~((indi.x + 30) / 32); //Целочисленное деление )) Нашел в инете
    	var i = ~~((indi.y + 75) / 32);

    	if(map[i - 1][j] != 'G' && map[i][j] != 'G'){
        	indi.x -= 1.5;
        	if(indi.stage == 0){
            	indi.hero.src = "images/maingonext.png";
            	indi.prevStage = 0;
            	indi.stage = 1;
        	} else if (indi.stage == 1 && indi.prevStage == 0){
          		indi.hero.src = "images/maingo.png";
          		indi.stage = 2;
          		indi.prevStage = 1;
        	} else if(indi.stage == 2){
            	indi.hero.src = "images/maingonext.png";
            	indi.stage = 1;
            	indi.prevStage = 2;
        	} else if(indi.stage == 1 && indi.prevStage == 2){
            	indi.hero.src = "images/mainpers.png";
            	indi.prevStage = 0;
            	indi.stage = 0;
        	}

    	}else {
    		indi.hero.src = "images/mainpers.png";
            indi.prevStage = 0;
            indi.stage = 0;
    	}

        indi.direction = "left";
    }

    indi.collision();

    //Если нажат space и персонаж на земле то гравитация
    //равна 5
    if(spacePressed && indi.OnGround){
        indi.heroDY = 5;
    }


    //если не нажата ни одна клавиша и перс не в состоянии покоя
    //то оставить его в состоянии покоя
    //в направление куда смотрел
    if(!rightPressed && !leftPressed && indi.stage != 0){
        if(indi.direction == "right"){
            indi.hero.src = "images/mainpersright.png";
        } else {
            indi.hero.src = "images/mainpers.png";
        }
        indi.stage = 0;
    }
}
