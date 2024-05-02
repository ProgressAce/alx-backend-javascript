
const expect = require('chai').expect;
// function to test
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromApi function', function() {
  it('returns resolved promise when its argument is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(function (data) {
        expect(data).to.include({data: 'Successful response from the API'});

        done();
      })
      .catch(function (err) {
        done(err);
      });
  });

  it('does nothing when its argument is false', function() {
    const result = getPaymentTokenFromAPI(false);
    
    expect(result).to.be.undefined;
  });
});
