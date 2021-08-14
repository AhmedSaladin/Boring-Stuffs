const Joi = require("joi");

const storeSchema = Joi.object({
  storeName: Joi.string()
    .alphanum()
    .min(3)
    .required()
    .error(
      () =>
        "Store name required, must be alphabetic only, minimum length 3 characters"
    ),

  storeCode: Joi.string()
    .min(1)
    .required()
    .error(() => "Store code required, minimum length 1 character"),

  address: Joi.string()
    .min(5)
    .required()
    .error(() => "Store address required, minimum length 5 characters"),
});
