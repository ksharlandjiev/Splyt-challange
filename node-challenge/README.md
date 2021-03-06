# Splyt node challenge  - defaultArguments function

## Background
Write a function defaultArguments . It takes a function as an argument, along with an object
containing default values for that function's arguments, and returns another function which defaults to the
right values.

## Decision taken to complete this task.
While this task is easy to solve in other programming languages with the use of reflection API and Decorator pattern, it does provide some challenges in JavaScript.
EcamScript [decorators](https://github.com/tc39/proposal-decorators) are still in Stage 2 and not production ready. At present, using decorators requires transpiler support, since no current browser or Node release has support for them yet. To implement decorators at this stage, we'll have to use **Babel** alongside with **@babel/plugin-proposal-decorators** plugin.
Another option is the use of TypeScript.

At this stage, a decision have been made to use a 3rd party [parse-function](https://www.npmjs.com/package/parse-function) dependency to help us parse functions and extract parameters and function body and to construct a new decorated funciton.

## Installation
```
npm install
```

## Usage

```js
// update PATH_TO_LIB; If file is on the same level replace with './'
const defaultArguments = require(PATH_TO_LIB); 

// your function with or without defaults.
function foo(bar, baz) {
  return bar + baz
}

// returns a decorated function with parameter baz defaulted to 9.
const decoratedFunction = defaultArguments(foo, {baz:9})

// assert 10+9
console.assert(decoratedFunction(10) === 19);
```

## Tests

```
npm test
```

## License

[MIT](http://josh.mit-license.org)

