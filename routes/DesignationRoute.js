const Router = require('express').Router();

const {
  saveDesignation,
  updateDesignation,
  deleteDesignation,
  getallDesignation,
} = require('../controllers/DesignationController');
const validate = require('../helpers/Validate');
const {
  designationvalidation,
  updatedesignationvalidation,
  deletedesignationvalidation,
} = require('../validation/DesignationValidation');

Router.route('/add-designation').post(
  [designationvalidation, validate],
  saveDesignation
);

Router.route('/update-designation/:id').put(
  [updatedesignationvalidation, validate],
  updateDesignation
);
Router.route('/get-designation').get(getallDesignation);
Router.route('/delete-designation/:id').delete(
  [deletedesignationvalidation, validate],
  deleteDesignation
);

module.exports = Router;
