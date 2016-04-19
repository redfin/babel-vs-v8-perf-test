
suite('Default parameters', () => {
  const randomNumbers = [];
  let rand;

  set('iterations', 1000000);

  bench('Adds numbers with a function using default parameters', () => {
    rand = Math.random();
    defaults();
    defaults(rand);
    defaults(rand, rand + 10);
  });
});

function defaults(x=0, y=0) {
  return x + y;
}
