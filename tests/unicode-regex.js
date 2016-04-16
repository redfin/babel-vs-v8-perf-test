const randomEmoji = require('random-emoji')

module.exports = function() {
  const emojiStr = randomEmoji.random({ count: 100000 }).reduce((x, y) => x + y, "");
  const start = new Date();
  const regex = new RegExp((randomEmoji.random({count: 1}))[0].character)
  for (var j = 0; j < 1000000; j++) {
    regex.test(emojiStr);
  }
  const end = new Date();
  return end - start;
}
