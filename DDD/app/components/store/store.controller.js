const sequelize = require("./../../db/db_connection");
const { GET_STORE_LIST } = require("./store.query.mysql");
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
};
