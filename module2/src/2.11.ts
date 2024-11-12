// utility types

// 1. Pick

type Person = {
  name: string;
  age: number;
  email?: string;
  contact: string;
};

type Name = Pick<Person, "name">;

type NameAge = Pick<Person, "name" | "age">;

// 2. Omit

type ContactInfo = Omit<Person, "name" | "age">;

// 3. Required

type RequiredPerson = Required<Person>;

// 4. Partial

type PartialPerson = Partial<Person>;

// 5. Readonly

type PersonReadonly = Readonly<Person>;

const person1: PersonReadonly = {
  name: "Sakib",
  age: 25,
  contact: "028",
};

// person1.name = "Yellow";

// 6. Record

type MyObj = {
  a: string;
  b: string;
};

const obj1: MyObj = {
  a: "aa",
  b: "bb",
  c: "cc",
};

type MyObj2 = Record<string, string>; //----------------> key o string, value o string

const obj2: MyObj2 = {
  a: "aa",
  b: "bb",
  c: "cc",
};

const emptyObj: Record<string, unknown> = {};
