const logDeveloper = (
  name: string,
  age: number,
  role?: "admin" | "user" | "guest"
) => {
  console.log(name, age, role ?? "No role given");
};

const dev1 = logDeveloper("Sakib", 24);
