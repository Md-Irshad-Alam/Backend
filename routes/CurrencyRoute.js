const Router = require('express').Router();

const {
  saveCurrency,
  updateCurrency,
  deleteCurrency,
  getallCurrency,
} = require('../controllers/CurrencyController.js');
const validate = require('../helpers/Validate');
const {
  Currencyvalidation,
  updateCurrencyvalidation,
  deleteCurrencyvalidation,
} = require('../validation/CurrencyValidation.js');

Router.route('/add-Currency').post(
  [Currencyvalidation, validate],
  saveCurrency
);
Router.route('/update-Currency/:id').put(
  [updateCurrencyvalidation, validate],
  updateCurrency
);
Router.route('/get-Currency').get(getallCurrency);
Router.route('/delete-Currency/:id').delete(
  [deleteCurrencyvalidation, validate],
  deleteCurrency
);

module.exports = Router;
