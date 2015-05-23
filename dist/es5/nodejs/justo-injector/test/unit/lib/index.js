//imports
const injector = require("../../../dist/es5/nodejs/justo-injector");

//suites
describe("#getParameters()", function() {
  it("Empty function", function() {
    injector.getParameters(function() {}).must.be.eq([]);
  });

  it("Function with one parameter", function() {
    injector.getParameters(function(one) {}).must.be.eq(["one"]);
  });

  it("Function with two parameters", function() {
    injector.getParameters(function(one, two) {}).must.be.eq(["one", "two"]);
  });

  it("Function with three parameters", function() {
    injector.getParameters(function(one, two, three) {}).must.be.eq(["one", "two", "three"]);
  });
});

describe("#hasParameter()", function() {
  function fn(one, two, three) {}

  it("Yep", function() {
    injector.hasParameter("one", fn).must.be.eq(true);
  });

  it("Nop", function() {
    injector.hasParameter("onee", fn).must.be.eq(false);
  });
});

describe("#getParameterIndex()", function() {
  function fn(one, two, three) {}

  it("Existing parameter - 1st", function() {
    injector.getParameterIndex("one", fn).must.be.eq(0);
  });

  it("Existing parameter - 2nd", function() {
    injector.getParameterIndex("two", fn).must.be.eq(1);
  });

  it("Existing parameter - 3rd", function() {
    injector.getParameterIndex("three", fn).must.be.eq(2);
  });

  it("Nonexisting parameter", function() {
    injector.getParameterIndex("onee", fn).must.be.eq(-1);
  });
});

describe("#inject()", function() {
  function fn(one, two, three) {}

  it("All arguments are known", function() {
    injector.inject({one: 1, two: 2, three: 3}, fn).must.be.eq([1, 2, 3]);
  });

  it("Only some arguments are known", function() {
    injector.inject({one: 1, three: 3}, fn).must.be.eq([1, undefined, 3]);
  });

  it("No argument is known", function() {
    injector.inject({}, fn).must.be.eq([undefined, undefined, undefined]);
  });
});
