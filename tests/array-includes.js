
suite('Array includes', () => {
  const randomNumbers = [];

  set('iterations', 100);

  before(() => {
    for (var i = 0; i < 100000; i++) {
      randomNumbers.push(Math.random());
    }
  });

  bench('100000 random number array contains a random number', () => {
    randomNumbers.includes(Math.random());
  })
});
