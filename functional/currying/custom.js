const curry = (fn) => (a) => (b) => fn(a, b);

const es5Curry = function (fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
};

const cb = (a, b) => a + b;

const add2 = curry(cb)(2);
const add3 = es5Curry(cb)(3);

console.log(add2(4));
console.log(add3(3));
