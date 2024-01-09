export default function getStudentsByLocation(studentsArray, city) {
  /*
    Returns an array of objects who are located in the specified city
    Accepts list of students from getListStudents and a string <city> argument.
    */

  // edge case
  if (!Array.isArray(studentsArray) || !(typeof city === 'string')) {
    return [];
  }

  const studentsInCity = studentsArray.filter((obj) => obj.location === city);
  return studentsInCity;
}
