exports.Book = class Book {
  constructor(id, title, desc, publisher, author, pages) {
    this.bookID = id;
    this.title = title;
    this.description = desc;
    this.publisher = publisher;
    this.author = author;
    this.pages = pages;
  }
};
