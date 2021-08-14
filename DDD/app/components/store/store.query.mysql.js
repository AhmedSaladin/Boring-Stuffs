module.exports = {
  GET_STORE_LIST: "SELECT * FROM stores;",
  CREATE_NEW_STORE:
    "INSERT INTO stores (name,st_code,address) values (?,?,?) ;",
};
