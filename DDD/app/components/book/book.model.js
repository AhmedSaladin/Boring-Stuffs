const Joi = require("joi");
class Book {
  constructor(title, desc, publisher, isbn, author, pages) {
    this.title = title;
    this.description = desc;
    this.publisher = publisher;
    this.isbn = isbn;
    this.author = author;
    this.pages = pages;
  }
}

const schema = Joi.object({
  title: Joi.string()
    .min(3)
    .required()
    .error(new Error("Book title required, minimum length 3 characters")),

  description: Joi.string()
    .min(15)
    .required()
    .error(
      new Error("Book description required, minimum length 15 characters")
    ),

  publisher: Joi.string()
    .min(2)
    .required()
    .error(new Error("Book publisher required, minimum length 2 characters")),

  isbn: Joi.string()
    .min(5)
    .required()
    .error(new Error("Book isbn required, minimum length 5 characters")),

  author: Joi.string()
    .min(3)
    .required()
    .error(new Error("Book author required, minimum length 3 characters")),

  pages: Joi.number()
    .min(2)
    .required()
    .error(new Error("Book pages required, minimum length 2 digit")),
});

module.exports = async (BOOK) => {
  const { error } = await schema.validateAsync({
    title: BOOK.title,
    description: BOOK.description,
    publisher: BOOK.publisher,
    isbn: BOOK.isbn,
    author: BOOK.author,
    pages: BOOK.pages,
  });
  if (error) return new Error(error);
  const book = new Book(
    BOOK.title,
    BOOK.description,
    BOOK.publisher,
    BOOK.isbn,
    BOOK.author,
    BOOK.pages
  );
  return book;
};
