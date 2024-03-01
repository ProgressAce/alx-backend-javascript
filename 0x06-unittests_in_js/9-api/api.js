// Simple express server
const express = require("express");
const app = express();

app.get("/", (req, res) => res.end("Welcome to the payment system"));

app.get("/cart/:id", (request, response) => {
  const id = request.params["id"];

  if (isNaN(id) || id < 1) {
    response.sendStatus(404);
    response.end();
  }
  response.end(`Payment methods for cart ${id}`);
});

app.listen(7865, () => console.log("API available on localhost port 7865"));
