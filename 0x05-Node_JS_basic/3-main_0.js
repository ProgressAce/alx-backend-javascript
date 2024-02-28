const countStudents = require("./3-read_file_async.copy");

countStudents("nope.csv")
  .then(() => {
    console.log("Done!");
  })
  .catch((error) => {
    console.log(error);
  });
