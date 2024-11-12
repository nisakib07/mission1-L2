const addCourseToStudents = <
  T extends { name: string; id: number; version: string }
>(
  student: T
) => {
  const course = "Next Level Web Dev";

  return {
    ...student,
    course,
  };
};

const student1 = addCourseToStudents({
  name: "Sakib",
  id: 2,
  version: "bangla",
  role: "Dev",
});

console.log(student1);
