// starts a small http server on port 1245, with a few endpoints
const http = require('http');
const fs = require('fs');

function countStudents(studentDbFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(studentDbFile, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const fileArr = data.split('\n');
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

        let resultMsg = `Number of students: ${studentCounter}\n`;

        let i = 0;
        for (const field of Object.keys(fields)) {
          resultMsg += `Number of students in ${field}: ${fields[field].count}. `
                                + `List: ${fields[field].list}`;

          const fieldSize = Object.keys(fields).length;
          i += 1;
          if (i < fieldSize) resultMsg += '\n';
        }
        resolve(resultMsg);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.writeHead(200);
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
