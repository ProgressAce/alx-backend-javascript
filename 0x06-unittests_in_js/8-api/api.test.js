// Test cases for api module.
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
// test api server with requests
const request = require("request");

describe("Integration Test - server feedback", function () {
  it("GET / returns `Welcome to the payment system` - status code 200", function (done) {
    request("http://localhost:7865", function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal("Welcome to the payment system");
    });
    done();
  });
});
