// starts a small http server on port 1245
const http = require('http');

const app = http.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
});
app.listen(1245);

module.exports = app;
