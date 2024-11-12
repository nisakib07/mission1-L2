{
  //Union

  type FavPlayer = "Messi" | "Ronaldo";
  type FavPlayer2 = "Neymar" | "Ronaldinho";

  type AllFavPlayers = FavPlayer | FavPlayer2;

  const sakibsFav: FavPlayer = "Messi";

  const rifatsFav: FavPlayer = "Ronaldo";

  const omuksFav: AllFavPlayers = "Ronaldinho";

  type Doctor = {
    id: number;
    name: string;
    education: "MBBS" | "FCPS" | "MRCP";
  };

  const doctor1: Doctor = {
    id: 1,
    name: "Jannatul Mim",
    education: "MBBS",
  };

  //Intersection

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const developer1: FullstackDeveloper = {
    skills: ["Express", "Node", "HTML"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  interface Add {
    (num1: number, num2: number): number;
  }

  const add1: Add = (num1, num2) => num1 + num2;
}
