exports.Book = class Book {
  constructor(id, title, desc, publisher, isbn, author, pages) {
    this.bookID = id;
    this.title = title;
    this.description = desc;
    this.publisher = publisher;
    this.isbn = isbn;
    this.author = author;
    this.pages = pages;
  }
};
