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

    // it('prints to console the total sum of the two passed numbers.', function() {
    //     sendPaymentRequestToApi(100, 20);
    // });
})
