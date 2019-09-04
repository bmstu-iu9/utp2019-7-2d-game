const BlockChange = (Object,jj,ii,WP,WN) => {
  let jT = ~~(jj / 32), iT = ~~(ii / 32); //Целочисленное деление )) Нашел в инете

  if (blocks[iT * map[0].length + jT].id == WP) { //нахождение данного
    blocks[iT * map[0].length + jT].id = WN; //смена id
  } else if (blocks[iT * map[0].length + jT + 1].id == WP && (WP == 'g' || WP == 's')) { //нахождение данного
    blocks[iT * map[0].length + jT + 1].id = WN; //смена id
  } else if (blocks[iT * map[0].length + jT - 1].id == WP && (WP == 'g' || WP == 's')) { //нахождение данного
    blocks[iT * map[0].length + jT - 1].id = WN; //смена id
  }
}
