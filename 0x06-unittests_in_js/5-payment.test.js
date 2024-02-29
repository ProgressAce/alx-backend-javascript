// Using beforeEach and afterEach mocha hooks `-`
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment.js");

describe("More efficient test for <sendPaymentRequestToApi function>", function () {
  let consLogSpy;

  beforeEach(function () {
    consLogSpy = sinon.spy(console, "log");
    consLogSpy.calledOnce;
  });
  afterEach(function () {
    consLogSpy.restore();
  });

  // Correct invocation and logging of console
  it("#1 Call to sendPaymentRequestToAPI with 100, and 20", function () {
    sendPaymentRequestToApi(100, 20);
    expect(consLogSpy.calledWithExactly("The total is: 120")).to.be.true;
    expect(consLogSpy.calledOnce).to.be.true;
  });

  it("#2 Call to sendPaymentRequestToAPI with 10, and 10", function () {
    sendPaymentRequestToApi(10, 10);
    expect(consLogSpy.calledWithExactly("The total is: 20")).to.be.true;
    expect(consLogSpy.calledOnce).to.be.true;
  });
});
