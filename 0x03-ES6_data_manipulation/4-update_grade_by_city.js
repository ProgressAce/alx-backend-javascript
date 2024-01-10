export default function updateStudentGradeByCity(
  studentsArray,
  city,
  newGrades,
) {
  if (!Array.isArray(studentsArray) || typeof city !== 'string') {
    return [];
  }

  const studentsInCity = studentsArray.filter((obj) => obj.location === city);

  const studentsGradeInfo = studentsInCity.map((obj) => {
    const specificGrade = newGrades.filter(
      (grade) => grade.studentId === obj.id,
    );

    let grade = 'N/A';
    if (specificGrade.length !== 0) {
      grade = specificGrade[0].grade;
    }

    return {
      ...obj,
      grade,
    };
  });

  return studentsGradeInfo;
}
