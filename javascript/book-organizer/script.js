const books = [
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960,
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949,
  },
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 1925,
  },
];

const sortByYear = (book1, book2) => 
    book1.releaseYear < book2.releaseYear ? -1 :
    book1.releaseYear > book2.releaseYear ? 1 : 0;

const filteredBooks = books.filter( (book) => book.releaseYear >= 1950);
filteredBooks.sort(sortByYear);