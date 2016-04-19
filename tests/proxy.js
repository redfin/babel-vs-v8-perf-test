suite('Proxy', () => {
  let target;
  let handler;
  let proxy;

  set('iterations', 100000);

  bench('proxy returns a constant', () => {
    target = {};
    handler = {
      get(target, propKey, receiver) {
        return 123;
      }
    };
    proxy = new Proxy(target, handler);
    proxy.foo;
  });
});
