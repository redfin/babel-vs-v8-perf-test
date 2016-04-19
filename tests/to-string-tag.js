suite('Symbol.toStringTag', () => {
  set('iterations', 100000);

  bench('sets an objects toString() to a constant', () => {
    return ({[Symbol.toStringTag]: 'Foo'}.toString())
  });
});
