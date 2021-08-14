const router = require("express").Router();
const wrapper = require("../../middlewares/async.handler");
const { get_stores_list, add_new_store } = require("./store.controller");

router
  .get("/stores", wrapper(get_stores_list))
  .post("/stores", wrapper(add_new_store));

module.exports = router;
