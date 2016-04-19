suite('Destructuring', () => {
  set('iterations', 1000000);

  bench('Destructures an addition function from an object', () => {
    destructuring(Math.random(), Math.random());
  });
});

function destructuring({ x, y }) {
  return x + y;
}
