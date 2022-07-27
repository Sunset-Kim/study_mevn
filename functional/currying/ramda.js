const R = require("ramda");
const addFourNumber = (a, b, c, d) => a + b + c + d;
const curriedAddFouNumber = R.curry(addFourNumber);
const f = curriedAddFouNumber(1, 2);
const g = f(3);

console.log(g(4)); // 10
