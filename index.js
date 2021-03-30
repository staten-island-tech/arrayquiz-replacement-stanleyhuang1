const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
const sentence = books.map(
  (book) =>
    book.authorFirst +
    " " +
    book.authorLast +
    " " +
    "wrote" +
    " " +
    book.name +
    " " +
    "in" +
    " " +
    book.publishDate
);
console.log(sentence);
//Sort books from oldest to most recent
const ordered = books.sort(function (a, b) {
  if (a.publishDate > b.publishDate) {
    return -1;
  } else {
    return 1;
  }
});
console.log(...ordered);
//sort books alphabetically

const alphaOrder = books.sort(function (a, b) {
  if (a.authorFirst > b.authorFirst) {
    return 1;
  } else {
    return -1;
  }
});
console.log(alphaOrder);

//Find who wrote War and Peace
const warPeace = books.find(function (war) {
  if (war.name === "War and Peace") {
    return true;
  }
});
console.log(warPeace.authorFirst + " " + warPeace.authorLast);

//how many books were written before 1900?
const nineteen = books.filter(function (book) {
  if (book.publishDate < 1900) {
    return true;
  }
});
console.log(nineteen.length);
//was there at least one book published within the last 100 years?
const lastHundred = books.some(function (book) {
  const currentYear = 2021;
  if (currentYear - book.publishDate <= 100) {
    return true;
  }
});
console.log(lastHundred);
//was every book published within the last 100 years?
const everyOne = books.every(function (book) {
  const currentYear = 2021;
  if (currentYear - book.publishDate <= 100) {
    return true;
  }
});
console.log(everyOne);
