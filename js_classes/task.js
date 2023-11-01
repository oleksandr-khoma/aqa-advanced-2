import Book from "./book.js";
import EBook from "./ebook.js";

// Task 1:
const book1 = new Book("Mistborn", "Brandon Sanderson", 2006);
const book2 = new Book("The Lord of the Rings", "J. R. R. Tolkien", 1954);
const book3 = new Book("Hear the Wind Sing", "Haruki Murakami", 1979);
book1.printInfo();
book2.printInfo();
book3.printInfo();

// Task 2:
const ebook1 = new EBook(
  "A Court of Thorns and Roses",
  "Sarah J. Maas",
  2015,
  ".mobi"
);
ebook1.printInfo();

// Task 3:
// Get:
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);
console.log(ebook1.fileFormat);

// Set:
book1.title = "Day of the Dragon";
book1.author = "Richard A. Knaak";
book1.year = 2001;
book1.printInfo();

ebook1.fileFormat = ".epub";
ebook1.year = 2000;
ebook1.printInfo();

// Task 4:
console.log(Book.findOldestBook([book1, book2, book3, ebook1]));

// Task 5:
console.log(EBook.fromBook(book1, ".epub"));
