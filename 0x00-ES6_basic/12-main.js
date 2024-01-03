import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from "./12-createReportObject.js";

const employees = {
  ...createEmployeesObject("engineering", ["Bob", "Jane"]),
  ...createEmployeesObject("marketing", ["Sylvie"]),
};

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

const employees2 = {};

const report2 = createReportObject(employees2);
console.log(report2.allEmployees); // {}
console.log(report2.getNumberOfDepartments(report2.allEmployees)); // 0
