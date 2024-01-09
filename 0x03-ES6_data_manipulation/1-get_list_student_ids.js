export default function getListStudentIds(studentsArray) {
  // Returns an array of ids from a list of student objects
  // from getListStudents() from 0-get_list_students.js
  // If the argument is not an array, the function returns an empty array.

  if (!Array.isArray(studentsArray)) return [];

  const studentIdArray = studentsArray.map((obj) => obj.id);

  return studentIdArray;
}
