// Prints the desired output from the given csv file (asynchronously)
const fs = require('fs');

function countStudents(studentDbFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(studentDbFile, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const fileArr = data.split('\r\n');
        const studentArr = fileArr.splice(1);

        let studentCounter = 0;
        const fields = {};

        for (const student of studentArr) {
          const details = student.split(',');

          // the student element is an empty str, therefore nothing more is permitted
          // otherwise, the element has valid student details
          if (details.length === 1) break;

          // update property values of a new or existing field
          if (details[3] in fields) {
            // update a field with the current student's details
            const field = fields[details[3]];
            field.count += 1;
            field.list += `, ${details[0]}`;
          } else {
            // add new field with the current student's details
            fields[details[3]] = { count: 1, list: details[0] };
          }

          // increment student counter
          studentCounter += 1;
        }

        console.log(`Number of students: ${studentCounter}`);

        for (const field of Object.keys(fields)) {
          console.log(`Number of students in ${field}: ${fields[field].count}. `
                                + `List: ${fields[field].list}`);
        }
      }
      resolve(); // promise waits for resolve or reject callbacks/feedback
      // before returning
    });
  });
}

module.exports = countStudents;
