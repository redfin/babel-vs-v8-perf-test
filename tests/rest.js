module.exports = function() {
  const randomNumbers = [];
  for (var i = 0; i < 100000; i++) {
    randomNumbers.push(Math.random());
  }
  const start = new Date();
  const [a, ...b] = randomNumbers;
  const [c, ...d] = b;
  const [e, ...f] = d;
  const [g, ...h] = f;
  const [j, ...k] = h;
  const [l, ...m] = k;
  const [n, ...o] = m;
  const end = new Date();
  return end - start;
}
