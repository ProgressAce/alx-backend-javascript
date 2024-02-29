// Defines tests cases for the sendPaymentRequestToApi function.
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
// function to test
const sendPaymentRequestToApi = require("./4-payment.js");
// function which evaluated function uses
const Utils = require("./utils.js");

describe("Testing <sendPaymentRequestToApi> function.", function () {
  it("1. Ensure the Utils' function is called", function () {
    const utilsStub = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(500, 40);

    expect(utilsStub.calledOnce).to.be.true;
    utilsStub.restore();
  });
  /*
  it("2. Gives Utils' function the correct arguments", function () {
    const utilsSpy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(500, 40);

    expect(utilsSpy.calledWithExactly("SUM", 500, 40)).to.be.true;
    utilsSpy.restore();
  });
*/
  // Imitating an epensive/taxing operation
  it("3. Verify that correct arguments are called", function () {
    const calculateNumberStub = sinon
      .stub(Utils, "calculateNumber")
      .returns(10);
    const consLogSpy = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledWithExactly("SUM", 100, 20)).to.be.true;
    expect(consLogSpy.calledWithExactly("The total is: 10")).to.be.true;

    calculateNumberStub.restore();
    consLogSpy.restore();
  });
});
