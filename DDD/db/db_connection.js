require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DILICT,
  }
);

sequelize.authenticate().then(() => console.log("Database is connected."));
sequelize.sync();
module.exports = sequelize;
