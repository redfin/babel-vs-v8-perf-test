suite('Spread operator', () => {
  const randomNumbers = [];

  set('iterations', 10);

  before(() => {
    for (var i = 0; i < 100000; i++) {
      randomNumbers.push(Math.random());
    }
  });

  bench('spreads an array of 100000 random numbers', () => {
    Math.max(...randomNumbers);
  });
});
