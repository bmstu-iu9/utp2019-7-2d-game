function physics(){
    /*
        Функция физика - отвечает за анимацию,
        передвижение перса
    */
    if(rightPressed){ // исключение застриваний в потолке
        var j = ~~((indi.x + 20) / 32); //Целочисленное деление )) Нашел в инете 
        var i = ~~((indi.y + 75) / 32);
        if (((indi.y + 16) %  32 < 3) ||  ((indi.y + 16) %  32 > 29))  {
        	if(map[i - 1][j + 1] != 'G' && map[i][j + 1] != 'G'){
                indi.x += 1.5;
                //ctx.drawImage(gnd, (j + 1) * 32, (i - 1) * 32);
                //ctx.drawImage(gnd, (j + 1) * 32, (i) * 32);
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
        } else{
            if(map[i - 1][j + 1] != 'G' && map[i][j + 1] != 'G' && map[i - 2][j + 1] != 'G'){
                indi.x += 1.5;
                //ctx.drawImage(gnd, (j + 1) * 32, (i - 1) * 32);
                //ctx.drawImage(gnd, (j + 1) * 32, (i) * 32);
                //ctx.drawImage(gnd, (j + 1) * 32, (i- 2) * 32);
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
        }

    	indi.direction = "right";

    }

    if(leftPressed){
    	var j = ~~((indi.x + 30) / 32); //Целочисленное деление )) Нашел в инете
    	var i = ~~((indi.y + 75) / 32);
    	if (((indi.y + 16) %  32 < 1) ||  ((indi.y + 16) %  32 > 31))  {
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
	    } else {
	    	if(map[i - 1][j] != 'G' && map[i][j] != 'G' && map[i - 2][j] != 'G'){
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
