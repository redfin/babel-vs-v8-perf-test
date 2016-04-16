module.exports = function() {
  const randomNumbers = [];
  const start = new Date();

  let rand;
  for (var j = 0; j < 1000000; j++) {
    rand = Math.random();
    defaults();
    defaults(rand);
    defaults(rand + 10);
  }
  const end = new Date();
  return end - start;
}

function defaults(x=0, y=0) {
  return x + y;
}
