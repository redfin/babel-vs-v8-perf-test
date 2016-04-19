const randomEmoji = require('random-emoji')

suite('Unicode regex', () => {
  let emojiStr;

  set('iterations', 10000);

  before(() => {
    emojiStr = randomEmoji.random({ count: 100000 }).reduce((x, y) => x + y, "");
  });

  bench('instantiates a regex with a random emoji and tests a 100000 random emoji string', () => {
    const regex = new RegExp((randomEmoji.random({count: 1}))[0].character);
    regex.test(emojiStr);
  });
});
