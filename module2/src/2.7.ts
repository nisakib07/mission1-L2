{
  type Vehicle = {
    bike: string;
    car: string;
    yacht: string;
  };

  type Owner = keyof Vehicle;

  const Myself = {
    name: "Sakib",
    job: "Web Dev",
    age: 26,
  };

  const findAge = Myself["age"]; // Object theke kono property ber korte chaile ?. method er pashapashi bracket method o use kora jay

  console.log(findAge);

  const findProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const res1 = findProperty(Myself, "job");
}
