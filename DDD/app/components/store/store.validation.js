const Joi = require("joi");
const Store = require("./store.model");

const schema = Joi.object({
  storeName: Joi.string()
    .alphanum()
    .min(3)
    .required()
    .error(
      new Error(
        "Store name required, must be alphabetic only, minimum length 3 characters"
      )
    ),

  storeCode: Joi.string()
    .min(1)
    .required()
    .error(new Error("Store code required, minimum length 1 character")),

  address: Joi.string()
    .min(5)
    .required()
    .error(new Error("Store address required, minimum length 5 character")),
});

module.exports = async (storeName, storeCode, address) => {
  const { error } = await schema.validateAsync({
    storeName,
    storeCode,
    address,
  });
  if (error) return new Error(error);
  const store = new Store(storeName, storeCode, address);
  return store;
};
