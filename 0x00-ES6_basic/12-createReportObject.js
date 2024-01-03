export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesDepartmentList) {
      const numOfDepartments = Object.keys(employeesDepartmentList).length;
      return numOfDepartments;
    },
  };
}
