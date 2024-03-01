// Test cases for api module.
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
// test api server with requests
const request = require("request");

describe("Integration Test - server feedback", function () {
  describe("GET / route", function () {
    it("Returns `Welcome to the payment system` with 200 status response", function (done) {
      request.get("http://localhost:7865/", function (err, res, body) {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal("Welcome to the payment system");
      });
      done();
    });
  });
});
