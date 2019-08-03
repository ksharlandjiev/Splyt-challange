const defaultArguments = require("./defaultArguments");
const assertedFunc = require("./assertedFunction");

// assert function works properly after being decorated.
const add2 = defaultArguments(assertedFunc, { b: 9 });
console.assert(add2(10) === 19);
console.assert(add2(10, 7) === 17);
console.assert(isNaN(add2()));

const add3 = defaultArguments(add2, { b: 3, a: 2 });
console.assert(add3(10) === 13);
console.assert(add3() === 5);
console.assert(add3(undefined, 10) === 12);

const add4 = defaultArguments(assertedFunc, { c: 3 }); // doesn't do anything, since c isn't console.assert(isNaN(add4(10)));
console.assert(add4(10, 10) === 20);

console.log('script execution finished')