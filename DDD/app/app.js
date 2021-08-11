require("./db/db_connection");
const express = require("express");

module.exports = (app) => {
  app.use(express.json());
};
