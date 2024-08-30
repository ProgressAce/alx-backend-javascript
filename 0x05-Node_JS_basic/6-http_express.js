// Creates a small HTTP server using Express
const express = require('express');

const app = express();
app.listen(1245);

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

module.exports = app;
