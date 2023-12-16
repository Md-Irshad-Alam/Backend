const Router = require('express').Router();

const {
  getProductCategories,
  saveProductCategory,
  updateProductCategory,
  deleteProductCategory,
} = require('../controllers/ProductCategoryController');
const validate = require('../helpers/Validate');

const {
  ProductCategoryValidation,
  updateProductCategoryValidation,
  deleteProductCategoryValidation,
} = require('../validation/productCategoryValidation.js');

Router.route('/add-ProductCategory').post(
  [ProductCategoryValidation, validate],
  saveProductCategory
);
Router.route('/update-ProductCategory/:id').put(
  [updateProductCategoryValidation, validate],
  updateProductCategory
);
Router.route('/get-productCategory').get(getProductCategories);
Router.route('/delete-productCategory/:id').delete(
  [deleteProductCategoryValidation, validate],
  deleteProductCategory
);

module.exports = Router;
