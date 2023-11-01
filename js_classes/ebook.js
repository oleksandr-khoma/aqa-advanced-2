import Book from "./book.js";

export default class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(format) {
    if (format.length <= 0) {
      console.log("Author name should not be empty");
      return;
    }
    this._fileFormat = format;
  }

  printInfo() {
    console.log(
      `E-Book title: ${this._title}, author: ${this._author}, year: ${this._year}, file format: ${this._fileFormat}`
    );
  }

  static fromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}
