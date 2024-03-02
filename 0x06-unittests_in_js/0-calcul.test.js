// Defines test cases for function <calculateNumber>.
const calculateNumber = require("./0-calcul.js");
const assert = require("assert");

describe("Test function <calculateNumber>.", function () {
  // accepts a and b arguments which are assumed to always be numbers
  it("1. Returns 7 with input 3.7 and 3", function () {
    assert.equal(calculateNumber(3.7, 3), 7);
  });

  it("1. Returns -3 with input -1.7 and -1", function () {
    assert.equal(calculateNumber(-1.7, -1), -3);
  });

  it("1. Sum positive integers", function () {
    assert.equal(calculateNumber(1, 3), 4, "Equal");
  });

  it("2. Sum negative integers", function () {
    assert.equal(calculateNumber(-5, -3), -8);
  });

  it("3. Sum positive and negative integers", function () {
    assert.equal(calculateNumber(-5, 3), -2);
  });

  it("4. Sum positive and negative floating-point numbers", function () {
    // ensure numbers round off correctly
    assert.equal(calculateNumber(1.3, 3.5), 5);

    // negative addition
    assert.equal(calculateNumber(-1.3, -2.1), -3);

    // mixed sign addition
    assert.equal(calculateNumber(5.6, -3.4), 3);
  });

  it("6. Checking sum to excede maximum and minimum numbers", function () {
    assert.strictEqual(calculateNumber(Number.MAX_VALUE, 1), Number.MAX_VALUE);
    assert.strictEqual(calculateNumber(Number.MIN_VALUE, -3), -3);
  });
});
