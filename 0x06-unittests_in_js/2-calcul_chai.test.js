// Defines test cases for function <calculateNumber>.
const calculateNumber = require("./2-calcul_chai");
const chai = require("chai");
const expect = chai.expect;

describe("Test function <calculateNumber> - sum.", function () {
  // accepts a and b arguments which are assumed to always be numbers
  it("1. Sum positive integers", function () {
    expect(calculateNumber("SUM", 1, 3)).to.equal(4);
  });

  it("2. Sum negative integers", function () {
    expect(calculateNumber("SUM", -5, -3)).to.equal(-8);
  });

  it("3. Sum positive and negative integers", function () {
    expect(calculateNumber("SUM", -5, 3)).to.equal(-2);
  });

  it("4. Sum positive and negative floating-point numbers", function () {
    // ensure numbers round off correctly
    expect(calculateNumber("SUM", 1.3, 3.5)).to.equal(5);

    // negative addition
    expect(calculateNumber("SUM", -1.3, -2.1)).to.equal(-3);

    // mixed sign addition
    expect(calculateNumber("SUM", 5.6, -3.4)).to.equal(3);
  });

  it("5. Sum of floating-point and integer numbers", function () {
    expect(calculateNumber("SUM", 7.2, 2)).to.equal(9);
    expect(calculateNumber("SUM", 5, -2.1)).to.equal(3);
  });

  it("6. Checking sum to excede maximum and minimum numbers", function () {
    expect(calculateNumber("SUM", Number.MAX_VALUE, 1)).to.equal(
      Number.MAX_VALUE
    );
    expect(calculateNumber("SUM", Number.MIN_VALUE, -3)).to.equal(-3);
  });
});

describe("Test function <calculateNumber> - subtract", function () {
  // accepts a and b arguments which are assumed to always be numbers
  it("1. Subtract positive integers", function () {
    expect(calculateNumber("SUBTRACT", 9, 4)).to.equal(5, "Equal");
  });

  it("2. Subtract negative integers", function () {
    expect(calculateNumber("SUBTRACT", -5, -3)).to.equal(-2);
  });

  it("3. Subtract positive and negative integers", function () {
    expect(calculateNumber("SUBTRACT", -5, 3)).to.equal(-8);
  });

  it("4. Subtract positive and negative floating-point numbers", function () {
    // ensure numbers round off correctly
    expect(calculateNumber("SUBTRACT", 4.3, 3.5)).to.equal(0);

    // negative addition
    expect(calculateNumber("SUBTRACT", -1.3, -2.1)).to.equal(1);

    // mixed sign addition
    expect(calculateNumber("SUBTRACT", 5.6, -3.4)).to.equal(9);
  });

  it("5. Subtract of floating-point and integer numbers", function () {
    expect(calculateNumber("SUBTRACT", 7.2, 2)).to.equal(5);
    expect(calculateNumber("SUBTRACT", 5, -2.1)).to.equal(7);
  });

  it("6. Checking subtract to excede maximum and minimum numbers", function () {
    expect(calculateNumber("SUBTRACT", Number.MAX_VALUE, -6)).to.equal(
      Number.MAX_VALUE
    );
    expect(calculateNumber("SUBTRACT", Number.MIN_VALUE, 3)).to.equal(-3); // 0 - 3
  });
});

describe("Test function <calculateNumber> - Divide", function () {
  // accepts a and b arguments which are assumed to always be numbers
  it("1. Divide positive integers", function () {
    expect(calculateNumber("DIVIDE", 1, 3)).to.equal(
      0.3333333333333333,
      "Equal"
    );
  });

  it("2. Divide negative integers", function () {
    expect(calculateNumber("DIVIDE", -6, -3)).to.equal(2);
  });

  it("3. Divide positive and negative integers", function () {
    expect(calculateNumber("DIVIDE", -5, 1)).to.equal(-5);
  });

  it("4. Divide positive and negative floating-point numbers", function () {
    // ensure numbers round off correctly
    expect(calculateNumber("DIVIDE", 6.3, 3.5)).to.equal(1.5);

    // negative addition
    expect(calculateNumber("DIVIDE", -1.3, -2.1)).to.equal(0.5);

    // mixed sign addition
    expect(calculateNumber("DIVIDE", 8.6, -3.4)).to.equal(-3);
  });

  it("5. Division of floating-point and integer numbers", function () {
    expect(calculateNumber("DIVIDE", 7.2, 2)).to.equal(3.5);
    expect(calculateNumber("DIVIDE", 5, -2.1)).to.equal(-2.5);
  });

  it("6. Checking division of zero", function () {
    expect(calculateNumber("DIVIDE", 3, 0.3)).to.equal("Error");
    expect(calculateNumber("DIVIDE", 5, -0.4)).to.equal("Error");
  });
});
