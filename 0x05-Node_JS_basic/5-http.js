// Create a more complex HTTP server using Node's HTTP module
const http = require("http");
const countStudents = require("./3-read_file_async");

if (process.argv.length !== 3) {
  console.log("Please provide the <database path>");
  process.exit(1);
}

const databasePath = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Holberton School!");
  }
  if (req.url === "/students") {
    res.write("This is the list of our students\n");

    countStudents(databasePath)
      .then((httpResponse) => {
        res.write(httpResponse);
      })
      .catch((error) => {
        res.write(error.message);
      });
  }

  res.end();
});

app.listen(1245);
module.exports = app;
