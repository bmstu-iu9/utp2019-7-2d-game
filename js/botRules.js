const botRules = (bot) => {
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
