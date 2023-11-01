export default class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  set title(bookTitle) {
    if (bookTitle.length <= 0) {
      console.log("Title should not be empty");
      return;
    }
    this._title = bookTitle;
  }

  set author(authorName) {
    if (authorName.length <= 0) {
      console.log("Author name should not be empty");
      return;
    }
    this._author = authorName;
  }

  set year(publishYear) {
    if (publishYear <= 0) {
      console.log("Year can't be equal or less then 0");
      return;
    }
    this._year = publishYear;
  }

  printInfo() {
    console.log(
      `Book title: ${this._title}, author: ${this._author}, year: ${this._year}`
    );
  }

  static findOldestBook(books) {
    return books.reduce(function (res, obj) {
      return obj.year < res.year ? obj : res;
    });
  }
}
