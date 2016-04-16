module.exports = function() {
  const randomNumbers = [];
  for (var i = 0; i < 100000; i++) {
    randomNumbers.push(Math.random());
  }
  const start = new Date();
  for (var j = 0; j < 100; j++) {
    randomNumbers.includes(Math.random());
  }
  const end = new Date();
  return end - start;
}
