module.exports = function() {
  const start = new Date();
  let target;
  let handler;
  let proxy;
  for (var j = 0; j < 100000; j++) {
    target = {};
    handler = {
      get(target, propKey, receiver) {
        return 123;
      }
    };
    proxy = new Proxy(target, handler);
    proxy.foo;
  }
  const end = new Date();
  return end - start;
}

function destructuring({ x, y }) {
  return x + y;
}
