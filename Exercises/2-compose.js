'use strict';

const compose = (...fns) => {
  const handlers = [];
  const composed = (x) => {
    if (fns.length === 0) return x;
    const lastIndex = fns.length - 1;
    let res = x;
    try {
      for (let i = lastIndex; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }
      // eslint-disable-next-line consistent-return
      return undefined; // test case wants undefined
    }
  };
  composed.on = (name, handler) => {
    if (name === 'error') handlers.push(handler);
  };
  return composed;
};

module.exports = { compose };
