const Router = require('express').Router();

const {
  saveIngredient,
  updateIngredient,
  deleteIngredient,
  getallIngredient,
} = require('../controllers/IngredientController');
const validate = require('../helpers/Validate');

const {
  IngredientValidation,
  updateIngredientValidation,
  deleteIngredientValidation,
} = require('../validation/IngredientValidation');

Router.route('/add-Ingredient').post(
  [IngredientValidation, validate],
  saveIngredient
);
Router.route('/update-Ingredient/:id').put(
  [updateIngredientValidation, validate],
  updateIngredient
);
Router.route('/get-Ingredient').get(getallIngredient);
Router.route('/delete-Ingredient/:id').delete(
  [deleteIngredientValidation, validate],
  deleteIngredient
);

module.exports = Router;
