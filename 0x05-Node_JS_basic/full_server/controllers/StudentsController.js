// controller for the students section of the application server
import readDatabase from '../utils';

class StudentsController {
  /**
     * Gets all the students from the database and returns them
     * as a display message.
     *
     * @param {import('express').Request} request
     * @param {import('express').Response} response
     */
  static getAllStudents(request, response) {
    const database = process.argv[2];
    readDatabase(database)
      .then((data) => {
        let respBody = 'This is the list of our students\n';
        const fieldOrder = Object.keys(data);
        fieldOrder.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));

        let fieldIdx = 0;
        for (const field of fieldOrder) {
          const fieldSize = data[field].length;
          respBody += `Number of students in ${field}: ${fieldSize}. `;

          let stdIdx = 0;
          let studentList = 'List: ';
          for (const name of data[field]) {
            studentList += name;

            stdIdx += 1;
            if (stdIdx < fieldSize) studentList += ', ';
          }
          respBody += studentList;

          // so the final field sent does not contain a newline
          fieldIdx += 1;
          if (fieldIdx < fieldOrder.length) respBody += '\n';
        }
        response.send(200, respBody);
      })
      .catch(() => {
        response.send(500, 'Cannot load the database');
      });
  }

  /**
     * Gets all the students of the provided major in the database
     * and returns them as a display message.
     *
     * @param {import('express').Request} request
     * @param {import('express').Response} response
     */
  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (['CS', 'SWE'].includes(major)) {
      const database = process.argv[2];
      readDatabase(database)
        .then((data) => {
          const fieldStudents = data[major];

          let i = 0;
          let studentList = 'List: ';
          for (const name of fieldStudents) {
            studentList += name;

            i += 1;
            if (i < fieldStudents.length) studentList += ', ';
          }

          response.send(200, studentList);
        })
        .catch(() => {
          response.send(500, 'Cannot load the database');
        });
    } else {
      response.send(500, 'Major parameter must be CS or SWE');
    }
  }
}

export default StudentsController;
