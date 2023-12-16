const Router = require('express').Router();

const {
  saveEmployeeCategory,
  updateEmployeeCategory,
  deleteEmployeeCategory,
  getallEmployeeCategory,
} = require('../controllers/EmployeeCategoryController');
const validate = require('../helpers/Validate');
const {
  EmployeeCategoryvalidation,
  updateEmployeeCategoryvalidation,
  deleteEmployeeCategoryvalidation,
} = require('../validation/EmployeeCategoryValidation');

Router.route('/add-EmployeeCategory').post(
  [EmployeeCategoryvalidation, validate],
  saveEmployeeCategory
);
Router.route('/update-EmployeeCategory/:id').put(
  [updateEmployeeCategoryvalidation, validate],
  updateEmployeeCategory
);
Router.route('/get-EmployeeCategory').get(getallEmployeeCategory);
Router.route('/delete-EmployeeCategory/:id').delete(
  [deleteEmployeeCategoryvalidation, validate],
  deleteEmployeeCategory
);

module.exports = Router;
