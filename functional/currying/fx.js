const curry = (f) => {
  return (a, ..._) => {
    console.log("처음", a, _);
    return _.length ? f(a, ..._) : (..._) => f(a, ..._);
  };
};

const addTwoNumber = (a, b) => a + b;

const add1 = curry(addTwoNumber);
console.log(add1(2, 3, 4));
console.log(add1(1)(3));
