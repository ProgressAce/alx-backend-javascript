export default function createIteratorObject(report) {
  // creates an iterator object that goes through each employee of every department
  const employeeArray = [];
  const employees = Object.values(report.allEmployees);

  for (const employee of employees) {
    employeeArray.push(...employee);
  }

  return employeeArray;
}
