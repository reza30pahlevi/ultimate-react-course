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
remainingBooks;

//latihan 2: ambil properti title dan author dari buku pertama, simpan sisanya di variabel others.
const book = books[0];
const { author, title, ...others } = book;
book;
others;

//latihan 3: Buat array baru booksWithNew yang berisi semua buku lama, plus satu buku tambahan:
const newBook = {
  id: 6,
  title: "Percy Jackson",
  author: "Rick Riordan",
  year: 2005,
};
const bookWithNew = [...books, newBook];
bookWithNew;

//latihan 4: Buat updatedBook dari buku ke-2 (index 1), tapi ubah tahun (year) jadi 2020, tanpa mengubah original books.
const bookT = books[1];
const updatedBook = { ...bookT, year: 2020 };
updatedBook;

//latihan 5: Ambil book2, lalu ubah title-nya jadi huruf kapital semua (toUpperCase()).
// Gabungkan hasilnya ke array modifiedBooks bersama buku lainnya.
const [bookTwo, ...restBooks] = books;
const updatedBook2 = { ...bookTwo, title: bookTwo.title.toUpperCase() };
const modifiedBooks = [updatedBook2, ...restBooks];
modifiedBooks;
