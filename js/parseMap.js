/* Парсер карты */
function parseMap(map){
    //Если G - это земля
    //Если S - это шипы
    //Если F - это факел
    //Есле С - предмет который нужно собирать
    //Если @ - это место появления героя
    /*
     Если пробел , пропускаем ;
     Если видим какой -то блок , то определяем какой это блок
     и создаем под него объект и кидаем в список блоков blocks
    */

    for (var i = 0; i < map.length ; i++){
        for (var j = 0 ; j < map[i].length ; j++){
            if (map[i][j] == ' '){
                continue;
            }
            else if (map[i][j] == 'G'){
                var o = {};
                o.id = 'G';
                o.x = j * 32;
                o.y = i * 32;
            }
            else if (map[i][j] == 'S'){
                var o = {};
                o.id = 'S';
                o.x = j * 32;
                o.y = i * 32;
            }
            else if (map[i][j] == 'F'){
                var o = {};
                o.id = 'F';
                o.x = j * 32;
                o.y = i * 32;
            }
            else if (map[i][j]=='C') {
              var o = {};
              o.id = 'C';
              o.x = j * 32;
              o.y = i * 32;
            }
            else if (map[i][j] == '@'){
            	indi.x = j * 32;
            	indi.y = i * 32 - 80;
            }
            blocks.push(o);
        }
    }
}
