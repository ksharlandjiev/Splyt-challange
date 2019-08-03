const defaultArguments = require('../');
const expect = require('chai').expect;

describe('function tests', function () {
  it('test regular named function passed as variable', function () {    
    const add = function test1(a, b){
        return a + b;
    }

    doAssert(add)
  });

  it('test anonymous function', function () {    
    const add = function (a, b){
        return a + b;
    }

    doAssert(add)
  });

  it('test arrow function', function () {    
    const add = (a, b) => {
        return a + b;
    }

    doAssert(add)
  });

  it('test function with defaults', function () {    
    const add = (a=2, b=1) => {
        return a + b;
    }

    const add1 = defaultArguments(add, { });
    expect(add1()).to.be.equal(3);

    const add2 = defaultArguments(add, { b: 4, a: 1 });
    expect(add2()).to.be.equal(5);    

    const add3 = defaultArguments(add, { b: 2 });
    expect(add3()).to.be.equal(4);    
    expect(add3(6)).to.be.equal(8);

    const add4 = defaultArguments(add, { a: 8 });
    expect(add4()).to.be.equal(9); 



  });

  function doAssert(func) {
    const add2 = defaultArguments(func, { b: 9 });

    expect(add2(10)).to.be.equal(19);
    expect(add2(10, 7)).to.be.equal(17);
    expect(add2()).to.be.NaN;
    
    const add3 = defaultArguments(add2, { b: 3, a: 2 });

    expect(add3(10)).to.be.equal(13);
    expect(add3()).to.be.equal(5);
    expect(add3(undefined, 10)).to.be.equal(12);

    const add4 = defaultArguments(func, { c: 3 }); // doesn't do anything, since c isn't console.assert(isNaN(add4(10)));    
    expect(add4(10, 10)).to.be.equal(20);
  }
});
