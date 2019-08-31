const botRules = (bot) => {
  /* поведение ботов (зависит от типа) */
  switch (bot.id) {
    case 1:
      botRules1(bot);
      break;
    case 2:
      botRules2(bot);
      break;
    default:
  }
}
