// Reading a file asynchronously with Node JS
const fs = require("fs");

function countStudents(path) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        let httpResponse = "";
        let tempLine = "";

        // splits the string data from file into lines
        // then filter out falsy elements that resulted from empty lines
        let csvLines = data.split("\r\n").splice(1);
        csvLines = csvLines.filter((line) => line);

        tempLine = `Number of students: ${csvLines.length}\n`;
        httpResponse += tempLine;
        process.stdout.write(tempLine);

        const fieldStudents = {};
        for (const line of csvLines) {
          const splitLine = line.split(",");
          const field = splitLine[3];
          const student = [];
          student.push(splitLine[0], splitLine[1], splitLine[2]);

          if (field in fieldStudents) {
            fieldStudents[field].push(student);
          } else {
            fieldStudents[field] = [student];
          }
        }

        for (const key of Object.keys(fieldStudents)) {
          const fieldStudentCount = fieldStudents[key].length;

          tempLine = `Number of students in ${key}: ${fieldStudentCount}. List: `;
          httpResponse += tempLine;
          process.stdout.write(tempLine);

          let i = 0;
          const participants = fieldStudents[key];

          for (const participant of participants) {
            if (i !== fieldStudentCount - 1) {
              httpResponse += `${participant[0]}, `;
              process.stdout.write(`${participant[0]}, `);
            } else {
              httpResponse += `${participant[0]}\n`;
              process.stdout.write(`${participant[0]}\n`);
            }
            i += 1;
          }
        }

        resolve(httpResponse);
      }
    });
  });

  return promise.then(
    (httpResponse) => {
      return httpResponse;
    },
    () => {
      throw new Error("Cannot load the database");
    }
  );
}

module.exports = countStudents;
