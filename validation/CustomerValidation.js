const { body, param } = require("express-validator");
// const StoreModel = require("../models/StoreModel");
const cutomerAdd = require("../models/AddCustomerModel");
exports.customerValidation = [
    body('')
]
exports.storevalidation = [
  body("store_name")
    .notEmpty()
    .withMessage("Provide the store name")
    .custom(async (value) => {
      await StoreModel.findOne({ store_name: value }).then((result) => {
        if (result) {
          throw new Error("Store is already exsists");
        } else {
          return true;
        }
      });
    }),
  body("remarks").notEmpty().withMessage("Provide the remarks"),
  body("isActive")
    .notEmpty()
    .withMessage("Provide Store Status")
    .isBoolean()
    .withMessage("This field only accept boolean value"),
];
