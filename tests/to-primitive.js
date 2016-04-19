suite('Symbol.toPrimitive', () => {
  bench('casts an object to a constant', () => {
    ({ [Symbol.toPrimitive](hint){return 12} }) + 12;
  });
});
