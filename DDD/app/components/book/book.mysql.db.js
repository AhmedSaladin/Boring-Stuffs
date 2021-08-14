const sequelize = require("../../db/mysql.db.connection");

module.exports = class StoreDB {
  async get_books_list() {
    return await sequelize.query("SELECT * FROM books", {
      type: sequelize.QueryTypes.SELECT,
    });
  }
};
