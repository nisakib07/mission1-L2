{
  //
  // interface

  // type User1 = {
  //   name: string;
  //   id: number;
  // };

  // type UserWithRole1 = User1 & { role: string };

  // const user1: UserWithRole1 = {
  //   name: "Sakib",
  //   id: 1,
  //   role: "Learner",
  // };

  // interface User2 {
  //   name: string;
  //   id: number;
  // }

  // interface UserWithRole2 extends User2 {
  //   role: string;
  // }

  // const user2: UserWithRole2 = {
  //   name: "Sakib",
  //   id: 1,
  //   role: "Coders",
  // };

  // //Interface in array

  // type Roll1 = number[];

  // const roll1 = [1, 2, 3];

  // interface Roll2 {
  //   [index: number]: number;
  // }

  // const roll2 = [4, 5, 6];

  type User = {
    name: string;
    id: number;
  };

  type User3 = User & { role: string };

  const user1: User3 = {
    name: "Sakib",
    id: 1,
    role: "Dev",
  };

  interface User2 {
    name: string;
    id: number;
  }

  interface User4 extends User2 {
    role: string;
  }

  const user2: User4 = {
    name: "Rakib",
    id: 2,
    role: "Dev",
  };

  //
}
