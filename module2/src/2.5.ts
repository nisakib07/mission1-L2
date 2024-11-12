const createArray = (param: string): string[] => {
  return [param];
};

const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};

const res1 = createArray("Bangladesh");

const res2 = createArrayWithGeneric<boolean>(true);

const attachCourseToStudent = <T>(student: T) => {
  const course = "Web Course";

  return {
    ...student,
    course,
  };
};

const student1 = attachCourseToStudent<{ name: string; id: number }>({
  name: "Sakib",
  id: 1,
});
