module.exports = function() {
  const start = new Date();
  for (var j = 0; j < 1000000; j++) {
    destructuring(Math.random(), Math.random());
  }
  const end = new Date();
  return end - start;
}

function destructuring({ x, y }) {
  return x + y;
}
