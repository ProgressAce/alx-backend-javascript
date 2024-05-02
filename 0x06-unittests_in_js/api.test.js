const { expect } = require('chai');
const mocha = require('mocha');
const request = require('request');

mocha.suite('The index page.', function() {
    it('sends status code 200.', function(done) {
        request('http://localhost:7865', function(err, res, body) {
            if (err) done(err);

            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('sends the desired result.', function(done) {
        request('http://localhost:7865', function(err, res, body) {
            if (err) done(err);

            expect(res.body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
});