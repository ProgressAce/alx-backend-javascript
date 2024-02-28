const countStudents = require("./3-read_file_async.copy");

countStudents("database.csv")
  .then((httpResponse) => {
    console.log("Done!");
    console.log(`-------------\n${httpResponse}`);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("After!");
