const End = () => {
  ctx.clearRect(0 , 0 , canvas.width , canvas.height);
  ctx.drawImage(bg , 0 , 0);

  ctx.strokeStyle = "white";
  ctx.font = 'bold 25px sans-serif';
  ctx.strokeText("Игра пройдена", 20, 45);
  End();
}
