'use strict';
//Генерация карты
//Генерация происходит построчно с помощью Math.random()

//Это пока только набросок
function matrixArray(rows,columns){
  var arr = new Array();
  for(var i=0; i<rows; i++){
    arr[i] = new Array();
    for(var j=0; j<columns; j++){
      if( i < 3 ){                   //пустое пространство
        arr[i][j] = ' ';
      }else if( i > 2 && i < 7){    //генерация факелов
        var k = Math.random();
        if(k > 0.95){               //число можно изменять, поэксперементируете
          arr[i][j] = 'F';
        }else{
          arr[i][j] = ' ';
        }
      }else if ( i > 6 && i < 12) { //пустое пространство
        arr[i][j] = ' ';
      }else if (i == 12) {          //блоки в воздухе
        var k = Math.random();
        if(k > 0.40){
          arr[i][j] = 'G';
        }else{
          arr[i][j] = ' ';
        }
      }else if (i > 12 && i < 16) { //пустое пространство
        arr[i][j] = ' ';
      }else if (i == 16) {
        var k = Math.random();
        if(k > 0.80 && j > 2){     //Генерация ямы с копьями
          arr[i][j] = ' ';
        }else{
          arr[i][j] = 'G';
        }
      }else if (i == 17) {         //Генерация самих копий
        if(arr[i - 1][j] == ' '){
          arr[i][j] = 'S';
        }else {
          arr[i][j] = 'G';
        }
      }else {
        arr[i][j] = 'G';          //Генерация земли
      }
    }
  }
  return arr;
}

var map = matrixArray(22,40);

/*var map = [
    '                                        ',
    '                                        ',
    '                   F                    ',
    '                                        ',
    '                                        ',
    '           F               F            ',
    '                                        ',
    '  F                                   F ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    'GGG       GGGGGG           GGGGGGGGGGGGG',
    '                                        ',
    '                                        ',
    '                                        ',
    'GGGGGGG   GGGGGGGGGGGG    GGGGGGGGGGGGGG',
    'GGGGGGGSSSGGGGGGGGGGGGSSSSGGGGGGGGGGGGGG',
    'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
    'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
    'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
    'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG'
];*/
