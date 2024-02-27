// Create a more complex HTTP server using Node's HTTP module
const http = require("http");
const countStudents = require("./3-read_file_async");

if (process.argv.length !== 3) {
  console.log("Please provide the <database path>");
  process.exit(1);
} else {
  const databasePath = process.argv[2];
}

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Holberton School!");
  }
  if (req.url === "/students") {
    res.write("This is the list of our students");

    countStudents(databasePath);
  }

  res.end();
});

app.listen(1245);
module.exports = app;
