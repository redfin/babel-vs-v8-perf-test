suite('Rest operator', () => {
  const randomNumbers = [];

  before(() => {
    for (var i = 0; i < 10000; i++) {
      randomNumbers.push(Math.random());
    }
  });

  bench('Checks the rest of a 10000 random number array 7 times', () => {
    const [a, ...b] = randomNumbers;
    const [c, ...d] = b;
    const [e, ...f] = d;
    const [g, ...h] = f;
    const [j, ...k] = h;
    const [l, ...m] = k;
    const [n, ...o] = m;
  });
});
