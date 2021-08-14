const sequelize = require("../../db/mysql.db.connection");

module.exports = class StoreDB {
  async get_books_list() {
    return await sequelize.query("SELECT * FROM books", {
      type: sequelize.QueryTypes.SELECT,
    });
  }

  async add_new_book(book, storeCode) {
    return await sequelize.query(
      `INSERT INTO books (
        title,
        description,
        publisher,
        isbn,
        author,
        pages,
        storeCode
        ) values (?,?,?,?,?,?,?)`,
      {
        type: sequelize.QueryTypes.INSERT,
        replacements: [
          book.title,
          book.description,
          book.publisher,
          book.isbn,
          book.author,
          book.pages,
          storeCode,
        ],
      }
    );
  }
};
