// testing using hooks
const expect = require('chai').expect;
const sinon = require('sinon');
// function to test
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi function', function() {
    let consLogSpy;
    this.beforeEach(function() {
        consLogSpy = sinon.spy(console, 'log');
    });

    this.afterEach(function() {
        consLogSpy.restore();
    });

    it('gives the correct argument to console.log ' +
       'and calls it once.', function() {
        sendPaymentRequestToApi(100, 20);
        expect(consLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    });

    it('gives the correct argument to console.log ' +
       'and calls it once.', function() {
        sendPaymentRequestToApi(10, 10);
        expect(consLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    });
})