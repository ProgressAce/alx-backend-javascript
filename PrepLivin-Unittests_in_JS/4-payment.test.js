// Defines tests cases for the sendPaymentRequestToApi function.
const expect = require("chai").expect;
const sinon = require("sinon");
// function to test
const sendPaymentRequestToApi = require("./3-payment.js");
// function which evaluated function uses
const Utils = require("./utils.js");

describe('sendPaymentRequestToApi function', function() {
    it('uses the Utils.calculateNumber function.', function() {
        const calculateNumberSpy = sinon.spy(Utils, "calculateNumber");
        sendPaymentRequestToApi(200, 10);

        expect(calculateNumberSpy.calledOnce).to.be.true;
        calculateNumberSpy.restore();
    });

    it('gives the Utils.calculateNumber function the desired args.', function() {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(200, 10);

        const wasCalledOnceWithArgs = calculateNumberSpy.calledWith('SUM', 200, 10);

        expect(wasCalledOnceWithArgs).to.be.true;
        calculateNumberSpy.restore();
    });

    // Imitating an epensive/taxing operation
    it('prints the correct message to console.', function() {
        const calcNumberStub = sinon.stub(Utils, 'calculateNumber');
        const consoleLogSpy = sinon.spy(console, "log");

        calcNumberStub.returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(calcNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

        calcNumberStub.restore();
        consoleLogSpy.restore();
    });
})