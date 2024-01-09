export default function getStudentIdsSum(studentsArray) {
  // Returns the sum of all the student ids

  if (!Array.isArray(studentsArray)) return [];

  const initialValue = 0;

  const sumOfIds = studentsArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue.id,
    initialValue,
  );
  return sumOfIds;
}
