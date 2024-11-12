interface Book {
  name: string;
  price: number;
  publication: string;
}
interface Magazine {
  name: string;
  price: number;
  date: string;
}

type BookUMagazine = Book | Magazine; //Either Book or Magazine

type BookIMagazine = Book & Magazine; // All properties from both Book and Magazine
