

const  inouyBack = (i,j,tim) => {
  let sh = [];
  i = ~~((16 + i) / 32);
  j = ~~((10 + j)  / 32);
  for (var d = 0; d < cod[(i + j * j) % 1000] ; d ++) {
    sh[d] =  text[lvl + 4 * (tim % 10) + 4 * 10 *(i % 10) + 4 * 10*10*(j % 10) + 4 * 10*10*10*((d * 3) % 28) + ~~((d * 3) / 28)];
  }
  var l = sh.length
  var g = -1;
  if (sh.length >= 1  && sh[sh.length - 1] >= '0' && sh[sh.length - 1] <='9') {
    if (sh.length >= 3 && sh[sh.length - 2] >= '0' && sh[sh.length - 2] <='9') {
      g = parseInt(sh[sh.length - 1]) + 10 * parseInt(sh[sh.length - 2]);
      l--;
    } else {
        g = parseInt(sh[sh.length - 1]);
    }
    l--;
    if (g >= 0) {
      ctx.drawImage(arts[g],((canvas.width / 2) - (16 * 5)),((canvas.height / 2) - (16 * 5)),5 * 32 , 5  * 32)
    }
    let c = [];
    c[0] = ctx.shadowColor;
    c[1] = ctx.strokeStyle;
    c[2] = ctx.fillStyle;
    c[3] = ctx.shadowOffsetX;
    c[4] = ctx.shadowOffsetY;
    c[5] = ctx.shadowBlur;
    c[6] = ctx.font;
    for (var d = 0; d < l; d++) {
      ctx.strokeStyle = "black"
      ctx.fillStyle = "black"
      ctx.shadowColor = "red";
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;
      ctx.shadowBlur = 10;
      ctx.font = 'bolder 60px Arial';
      ctx.fillText(sh[d],((canvas.width / 2) - (l * 40 / 2 )) + 40 * d,((canvas.height / 2) - (16 * 6)));
    }
    ctx.shadowColor = c[0];
    ctx.strokeStyle = c[1]
    ctx.fillStyle =  c[2];
    ctx.shadowOffsetX = c[3];
    ctx.shadowOffsetY = c[4];
    ctx.shadowBlur = c[5];
    ctx.font = c[6];
  }
}
