const sequelize = require("./../../db/db_connection");
const { GET_STORE_LIST, CREATE_NEW_STORE } = require("./store.query.mysql");
const Store = require("./store.model");
module.exports = {
  get_store_list: async (req, res) => {
    try {
      const data = await sequelize.query(GET_STORE_LIST, {
        type: sequelize.QueryTypes.SELECT,
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err.toString());
    }
  },
  create_new_store: async (req, res) => {
    try {
      const { name, st_code, address } = req.body;
      const store = new Store(name, st_code, address);
      const data = await sequelize.query(CREATE_NEW_STORE, {
        type: sequelize.QueryTypes.INSERT,
        values: store,
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err.toString());
    }
  },
};
