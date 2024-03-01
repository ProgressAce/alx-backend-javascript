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

  describe("GET /cart/:id route", function () {
    it("Returns `Payment methods for cart :id` upon validated access of *id* with status code 200", function (done) {
      request.get("http://localhost:7865/cart/89", function (err, res, body) {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal(`Payment methods for cart ${id}`);
      });
      done();
    });

    it("Returns status code 404 for non-numeric characters", function (done) {
      request.get(
        "http://localhost:7865/cart/abacus",
        function (err, res, body) {
          expect(res.statusCode).to.be.equal(404);
        }
      );
      done();
    });

    it("Returns status code 404 for negative numbers", function (done) {
      request.get("http://localhost:7865/cart/-12", function (err, res, body) {
        expect(res.statusCode).to.be.equal(404);
      });
      done();
    });
  });
});
