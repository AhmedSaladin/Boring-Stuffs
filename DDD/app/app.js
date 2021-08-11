require("./db/db_connection");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
module.exports = (app) => {
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(helmet());
  app.use(cors());
};
