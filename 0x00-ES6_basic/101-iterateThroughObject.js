export default function iterateThroughObject(reportWithIterator) {
  const employees = reportWithIterator;
  let employeeNames = '';
  let i = 1;

  for (const employee of employees) {
    if (i < employees.length) {
      employeeNames += `${employee} | `;
    } else {
      employeeNames += employee;
    }
    i += 1;
  }

  return employeeNames;
}
