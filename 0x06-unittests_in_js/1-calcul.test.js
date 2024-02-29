// Defines test cases for function <calculateNumber>.
const calculateNumber = require("./1-calcul.js");
const assert = require("assert");

describe("Test function <calculateNumber> - sum.", function () {
  // accepts a and b arguments which are assumed to always be numbers
  it("1. Sum positive integers", function () {
    assert.equal(calculateNumber("SUM", 1, 3), 4, "Equal");
  });

  it("2. Sum negative integers", function () {
    assert.equal(calculateNumber("SUM", -5, -3), -8);
  });

  it("3. Sum positive and negative integers", function () {
    assert.equal(calculateNumber("SUM", -5, 3), -2);
  });

  it("4. Sum positive and negative floating-point numbers", function () {
    // ensure numbers round off correctly
    assert.equal(calculateNumber("SUM", 1.3, 3.5), 5);

    // negative addition
    assert.equal(calculateNumber("SUM", -1.3, -2.1), -3);

    // mixed sign addition
    assert.equal(calculateNumber("SUM", 5.6, -3.4), 3);
  });

  it("5. Sum of floating-point and integer numbers", function () {
    assert.equal(calculateNumber("SUM", 7.2, 2), 9);
    assert.equal(calculateNumber("SUM", 5, -2.1), 3);
  });

  it("6. Checking sum to excede maximum and minimum numbers", function () {
    assert.strictEqual(
      calculateNumber("SUM", Number.MAX_VALUE, 1),
      Number.MAX_VALUE
    );
    assert.strictEqual(calculateNumber("SUM", Number.MIN_VALUE, -3), -3);
  });
});

describe("Test function <calculateNumber> - subtract", function () {
  // accepts a and b arguments which are assumed to always be numbers
  it("1. Subtract positive integers", function () {
    assert.equal(calculateNumber("SUBTRACT", 9, 4), 5, "Equal");
  });

  it("2. Subtract negative integers", function () {
    assert.equal(calculateNumber("SUBTRACT", -5, -3), -2);
  });

  it("3. Subtract positive and negative integers", function () {
    assert.equal(calculateNumber("SUBTRACT", -5, 3), -8);
  });

  it("4. Subtract positive and negative floating-point numbers", function () {
    // ensure numbers round off correctly
    assert.equal(calculateNumber("SUBTRACT", 4.3, 3.5), 0);

    // negative addition
    assert.equal(calculateNumber("SUBTRACT", -1.3, -2.1), 1);

    // mixed sign addition
    assert.equal(calculateNumber("SUBTRACT", 5.6, -3.4), 9);
  });

  it("5. Subtract of floating-point and integer numbers", function () {
    assert.equal(calculateNumber("SUBTRACT", 7.2, 2), 5);
    assert.equal(calculateNumber("SUBTRACT", 5, -2.1), 7);
  });

  it("6. Checking subtract to excede maximum and minimum numbers", function () {
    assert.strictEqual(
      calculateNumber("SUBTRACT", Number.MAX_VALUE, -6),
      Number.MAX_VALUE
    );
    assert.strictEqual(calculateNumber("SUBTRACT", Number.MIN_VALUE, 3), -3); // 0 - 3
  });
});

describe("Test function <calculateNumber> - Divide", function () {
  // accepts a and b arguments which are assumed to always be numbers
  it("1. Divide positive integers", function () {
    assert.equal(calculateNumber("DIVIDE", 1, 3), 0.3333333333333333, "Equal");
  });

  it("2. Divide negative integers", function () {
    assert.equal(calculateNumber("DIVIDE", -6, -3), 2);
  });

  it("3. Divide positive and negative integers", function () {
    assert.equal(calculateNumber("DIVIDE", -5, 1), -5);
  });

  it("4. Divide positive and negative floating-point numbers", function () {
    // ensure numbers round off correctly
    assert.equal(calculateNumber("DIVIDE", 6.3, 3.5), 1.5);

    // negative addition
    assert.equal(calculateNumber("DIVIDE", -1.3, -2.1), 0.5);

    // mixed sign addition
    assert.equal(calculateNumber("DIVIDE", 8.6, -3.4), -3);
  });

  it("5. Division of floating-point and integer numbers", function () {
    assert.equal(calculateNumber("DIVIDE", 7.2, 2), 3.5);
    assert.equal(calculateNumber("DIVIDE", 5, -2.1), -2.5);
  });

  it("6. Checking division of zero", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 3, 0.3), "Error");
    assert.strictEqual(calculateNumber("DIVIDE", 5, -0.4), "Error");
  });
});
