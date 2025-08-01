const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// cara normal
// const book = getBook(2);
// const title = book.title;
// const author = book.author;
// console.log(title, author);

// cara destructuring
const book = getBook(2);
book;

const { title, author, genres, pages, publicationDate, hasMovieAdaptation } =
  book;
console.log(title, author, genres);

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, ...otherGenres);

//spread
const newGenres = ["Epic Fantasy", ...genres];
newGenres;

//nambahin object menggunakan spread dan overwriting spread
const updatedBook = {
  ...book,
  moviePublicationDate: "2001 - 12 - 9",
  pages: 1001,
};
updatedBook;

// template literals.

const summary = `${title} is a ${pages}-page book that was written by ${author} and was released in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted into a movie`;
summary;

// ternaries
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

// functions normal
// function getYear(str) {
//   return str.split("-")[0];
// }

// arrow functions
const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

const ringkasan = `${title} dirilis pada tahun ${getYear(publicationDate)}`;
ringkasan;

//short circuiting and logical operators.
//AND Operator. Otomatis akan return yang false. dan jika tidak ada yang false maka akan otomatis return pilihan kedua
console.log(true && "some string");
console.log(false && "some string");

console.log(hasMovieAdaptation && "This book has a movie adaptation");

//falsy value: 0, null, undefined. truthy value adalah apapun selain falsy value yang berarti akan menjadi true value.
console.log("fulan" && "fulana"); //akan otomatis ke pilihan kedua karena value yang pertama adalah true karena bukan falsy
console.log(0 && "fulana");

//OR operator. kebalikan dari AND operator.
console.log(true || "Some string");
console.log(false || "Some string");

const spanishTranslation = book.translations.spanish || "Not Translated";
spanishTranslation;

console.log(book.reviews.librarything.reviewsCount); //ini hasilnya 0, berarti ada data. namun akan bermasalah jika menggunakan OR
const countWrong = book.reviews.librarything.reviewsCount || "NO DATA";
countWrong; //akan menunjukkan no data padahal ada data walaupun angka nya 0. Ini masalah.

//Gunakan ?? agar hanya return undefined atau null, tanpa ada 0.
const count = book.reviews.librarything.reviewsCount ?? "NO DATA";
count;
