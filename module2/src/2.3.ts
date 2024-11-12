// {
//   //
//   //Generic type

//   type GenericArray<T> = Array<T>;

//   //   const rollNumbers: number[] = [1, 2, 3];
//   //   const rollNumbers: Array<number> = [1, 2, 3];
//   const rollNumbers: GenericArray<number> = [1, 2, 3];

//   //   const names: string[] = ["Sakib", "Rakib", "Mim"];
//   //   const names: Array<string> = ["Sakib", "Rakib", "Mim"];
//   const names: GenericArray<string> = ["Sakib", "Rakib", "Mim"];

//   //   const boolArray: boolean[] = [true, false, true];
//   //   const boolArray: Array<boolean> = [true, false, true];
//   const boolArray: GenericArray<boolean> = [true, false, true];

//   //Generic Array of Objects

//   const user: GenericArray<{ name: string; roll: number }> = [
//     {
//       name: "Sakib",
//       roll: 1,
//     },
//     {
//       name: "Rakib",
//       roll: 2,
//     },
//     {
//       name: "Mim",
//       roll: 3,
//     },
//   ];

//   //Generic Tuple
//   type GenericTuple<X, Y> = [X, Y];
//   const hooman: GenericTuple<string, number> = ["Sakib", 20];

//   const userWithId: GenericTuple<number, { name: string; role: string }> = [
//     1,
//     { name: "Sakib", role: "Employee" },
//   ];

//   //
// }

type GenericArray<T> = Array<T>;

// const numArray: number[] = [1, 2, 3];
const numArray: GenericArray<number> = [1, 2, 3];

// const stringArray: string[] = ["sakib", "rakib"];
const stringArray: Array<string> = ["sakib", "rakib"];

type GenericTuple<X, Y> = [X, Y];
const manush: GenericTuple<string, string> = ["Sakib", "Rakib"];

const userWithId: GenericTuple<number, { name: string; role: string }> = [
  1,
  { name: "Sakib", role: "Dev" },
];
