type Person = {
  name: string;
  age: number;
  contact: {
    phone: string;
    address: {
      house: string;
      road: string;
      city?: string;
    };
  };
};

const getEmployeeCity = (employee: Person): string => {
  return employee?.contact?.address?.city
    ? employee?.contact?.address?.city
    : "City not available";
};

const person1: Person = {
  name: "sakib",
  age: 24,
  contact: {
    phone: "01kjk",
    address: {
      house: "1",
      road: "3",
      city: "Gazipur",
    },
  },
};

console.log(getEmployeeCity(person1));
