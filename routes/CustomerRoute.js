const Router = require('express').Router();

const {
  Add_Billing,
  Update_billing,
} = require('../controllers/Customer_controller/BillingController');
const {
  saveCustomer,
  updateCustomer,
  GetAllCustomer,
  DeleteCustomer,
} = require('../controllers/Customer_controller/CustomerController');
const {
  Add_Shiping,
  Update_Shiping,
} = require('../controllers/Customer_controller/ShipingController');

const validate = require('../helpers/Validate');

Router.route('/add-customer').post(saveCustomer);
Router.route('/update-customer/:id').put([validate], updateCustomer);
Router.route('/getAll-customer').get(GetAllCustomer);
Router.route('/delete-customer/:id').delete([validate], DeleteCustomer);
Router.route('/ship-address').post(validate, Add_Shiping);
Router.route('/update-ship/:id').put(validate, Update_Shiping);
Router.route('/bill-address').post(validate, Add_Billing);
Router.route('/update-bill/:id').put(validate, Update_billing);

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
