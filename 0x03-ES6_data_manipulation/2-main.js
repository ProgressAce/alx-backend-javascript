import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(5, "San Francisco"));
console.log(getStudentsByLocation(students, {}));
console.log(getStudentsByLocation(students, "San Francisco"));
