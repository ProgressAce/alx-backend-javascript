// Handles the server's database utility
import * as fs from 'fs';

/**
 * Reads the database asynchronously and returns its data.
 *
 * @example readDatabase('./database.csv')
 * returns:  {CS: [Bill, Johanne, Nally], SWE: [Abby, Nector, Bran]}
 * @param {String} filePath a string argument of the file path
 * @returns a Promise, with an error object on rejection
 *          or an object of fields which contain arrays of the firstname of students.
 */
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {

        const fileAsLines = data.split('\n');
        const studArr = fileAsLines.splice(1); // student array

        const db = {};

        for (const stud of studArr) {
          if (stud.trim() !== '') {
            const studInfo = stud.split(',');
            const fieldName = studInfo[3];

            if (fieldName) {
              // update the db if the field already exists inside it
              if (fieldName in db) {
                db[fieldName].push(studInfo[0]);
                // insert new field name into the db should it not exist.
              } else {
                db[fieldName] = [studInfo[0]]; // insert student's name
              }
            }
          }
        }

        resolve(db);
      }
    });
  });
}

export default readDatabase;
