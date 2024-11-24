'use strict';

const pipe = (...fns) => {
  if (fns.some((f) => typeof f !== 'function')) {
    throw new Error('Усі аргументи повинні бути функціями.');
  }
  return (x) => fns.reduce((c, f) => f(c), x);
};

module.exports = { pipe };
