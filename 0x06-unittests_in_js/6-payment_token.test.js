// Async tests with done
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
// async function to test
const getPaymentTokenFromAPI = require("./6-payment_token.js");

describe("Testing <getPaymentTokenFromAPI> function workings", function () {
  it("1. When called and passed `true`, it gives object with certain data", function (done) {
    getPaymentTokenFromAPI(true)
      .then(function (data) {
        expect(data).to.include({ data: "Successful response from the API" });

        done();
      })
      .catch(function (err) {
        done(err);
      });
  });

  it("2. When called and passed `false`, nothing further is done", function (done) {
    getPaymentTokenFromAPI(true).then(
      function (data) {},
      function (reject) {
        expect(reject).to.be.undefined;
      }
    );

    done();
  });
});
