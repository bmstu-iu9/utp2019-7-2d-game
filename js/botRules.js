const botRules = (bot) => {
  /* поведение ботов (зависит от типа) */
  switch (bot.id) {
    case 1:
      botRules1(bot);
      break;
    case 2:
      botRules2(bot);
      break;
    case 3:
      botRules3(bot);
      break;
    case 4:
      botRules4(bot);
      break;
    case 5:
      Boss1(bot);
      break;
    default:
  }
}
