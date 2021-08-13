const db = require("sequelize");
const { dbQueries } = require("./store.query.mysql");
exports.Store = {
  get_store_list: async (req, res) => {
    try {
      const data = db.query(dbQueries.GET_STORE_LIST);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
