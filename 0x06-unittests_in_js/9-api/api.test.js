// Test cases for api module.
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
// test api server with requests
const request = require("request");

describe("Home Page", function () {
  describe("GET / route", function () {
    it("Returns status code 200", function (done) {
      request("http://localhost:7865", function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it("Returns the correct result", function (done) {
      request("http://localhost:7865", function (err, res, body) {
        expect(body).to.equal("Welcome to the payment system");
        done();
      });
    });
  });
});

describe("Cart Page", function () {
  describe("GET /cart/:id", function () {
    it("Route exists", function (done) {
      request.get("http://localhost:7865/cart/1", function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it("Returns status code 200 for number id + correct result", function (done) {
      request.get("http://localhost:7865/cart/89", function (err, res, body) {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal(`Payment methods for cart 89`);
      });
      done();
    });

    it("Returns status code 404 for non-numeric id", function (done) {
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
        expect(res.statusCode).to.equal(404);
      });
      done();
    });

    // Can ADD: status code 404 for non-existing card ids
  });
});
