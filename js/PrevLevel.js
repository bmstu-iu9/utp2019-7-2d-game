const PrevLevel = () => {
  if (lvl > 1) {
    lvl--; // увеличение уровня
    XPressed = false;
    YPressed = false;
    PPressed = false;
    KPressed = false;
    RestartLevel(); // перезапускаем
  }
}
