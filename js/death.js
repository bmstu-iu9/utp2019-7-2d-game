const death = () => {
  /* обрабтка списка смерти и отрисовка смерти по позициям*/
  for (var i = 0; i < deathlist.length; i++) {
    if (deathlist[i] != undefined) {
      deathID = 1;
      if (deathlist[i].id == 0) {
        deathID = 2;
      }
      if (deathlist[i].orientation == 'r') {
        ctx.drawImage(deathlist[i].deathR , (((~~deathlist[i].deathposision) * (44 * deathID)) % (176 * deathID)) ,0 ,44 ,88 ,NN[0] * (deathlist[i].x + DD[0] + FF[0]),NN[1] * (deathlist[i].y + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 64 ); // анимация бега    bot.posision += 0.03;
        deathlist[i].deathposision += 0.07;
      } else {
        ctx.drawImage(deathlist[i].deathL , (((~~deathlist[i].deathposision) * (44 * deathID)) % (176 * deathID)) ,0 ,44 ,88 ,NN[0] * (deathlist[i].x + DD[0] + FF[0]),NN[1] * (deathlist[i].y + DD[1] + FF[1]) ,NN[0] * 32 ,NN[1] * 64 ); // анимация бега    bot.posision += 0.03;
        deathlist[i].deathposision += 0.07;
      }
      if (deathlist[i].deathposision > 4) {
        deathlist.splice(i,1);
      }
    }
  }
}
