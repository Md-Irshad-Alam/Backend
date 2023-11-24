const Router = require('express').Router();

const {
  saveCustomer,
  updateCustomer,
  GetAllCustomer,
  DeleteCustomer,
} = require('../controllers/CustomerController');
const validate = require('../helpers/Validate');

Router.route('/add-customer').post(validate, saveCustomer);
Router.route('/update-customer/:id').put([validate], updateCustomer);
Router.route('/getAll-customer').get(GetAllCustomer);
Router.route('/delete-customer/:id').delete([validate], DeleteCustomer);

// Router.route("/add-store").post([storevalidation, validate], saveStore);
// Router.route("/update-store").put(
//   [updatestorevalidation, validate],
//   updatestore
// );
// Router.route("/get-store").get(getallstore);
// Router.route("/delete-store").delete(
//   [deletestorevalidation, validate],
//   deletestore
// );

module.exports = Router;
