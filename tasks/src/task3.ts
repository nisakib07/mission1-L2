type Person<T> = {
  Name: string;
  Address: string;
  HairColor: string;
  EyeColor: string;
  Income: number;
  Expense: number;
  Hobbies: string[];
  FamilyMembers: string[];
  Job: string;
  Skills: T;
  MaritalStatus: "Married" | "Single" | "Divorced";
  Friends: string[];
};

const person1: Person<{ frontEnd: string[]; backend: string[] }> = {
  Name: "Sakib",
  Address: "Gazipur, Dhaka",
  HairColor: "Black",
  EyeColor: "Black",
  Income: 18500,
  Expense: 15000,
  Hobbies: ["Cricket", "Gaming"],
  FamilyMembers: ["Abbu", "Ammu", "Mim", "Rakib"],
  Job: "Jr Web Developer",
  Skills: {
    frontEnd: ["HTML", "Css", "React"],
    backend: ["Express", "MongoDb"],
  },
  MaritalStatus: "Single",
  Friends: ["Mimu", "Auri", "Ball"],
};
