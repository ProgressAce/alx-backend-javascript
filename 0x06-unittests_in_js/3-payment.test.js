// Defines tests cases for the sendPaymentRequestToApi function.
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
// function to test
const sendPaymentRequestToApi = require("./3-payment.js");
// function which evaluated function uses
const Utils = require("./utils.js");

describe("Testing <sendPaymentRequestToApi> function.", function () {
  it("1. Ensure the Utils' function is called", function () {
    const utilsSpy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(500, 40);

    expect(utilsSpy.calledOnce).to.be.true;
    utilsSpy.restore();
  });

  it("2. Gives Utils' function the correct arguments", function () {
    const utilsSpy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(500, 40);

    expect(utilsSpy.calledWithExactly("SUM", 500, 40)).to.be.true;
    utilsSpy.restore();
  });

  /*
  it("3. Returns correct result", function () {
    const consoleLogSpy = sinon.spy(console, "log");
    sendPaymentRequestToApi(500, 40);

    console.log(consoleLogSpy.arg[0]);
    expect(consoleLogSpy.args[0][0]).to.equal(`The total is: ${total}`);
  });
  */
});
