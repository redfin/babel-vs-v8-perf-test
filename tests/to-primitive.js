module.exports = function() {
  const start = new Date();
  for (var i = 0; i < 100000; i++) {
    ({ [Symbol.toPrimitive](hint){return 12} }) + 12;
  }
  const end = new Date();
  return end - start;
}
