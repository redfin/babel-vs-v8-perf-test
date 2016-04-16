module.exports = function() {
  const start = new Date();
  for (var i = 0; i < 100000; i++) {
    ({[Symbol.toStringTag]: 'Foo'}.toString())
  }
  const end = new Date();
  return end - start;
}
