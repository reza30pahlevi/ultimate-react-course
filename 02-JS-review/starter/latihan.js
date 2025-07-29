const books = [
  {
    id: 1,
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    year: 1954,
  },
  {
    id: 2,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J. K. Rowling",
    year: 1997,
  },
  {
    id: 3,
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    year: 1951,
  },
  { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 5, title: "1984", author: "George Orwell", year: 1949 },
];

//latihan 1: Ambil dua buku pertama dan simpan sisanya ke variabel remainingBooks.

const [firstBook, secondBook, ...remainingBooks] = books;
books;

//latihan 2: ambil properti title dan author dari buku pertama, simpan sisanya di variabel others.
const book = books[0];
const { author, title, ...others } = book;
book;
