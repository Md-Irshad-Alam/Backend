const Router = require('express').Router();

const {
  savecolor,
  updatecolor,
  getallcolor,
  deletecolor,
} = require('../controllers/ColorMasterController');
const validate = require('../helpers/Validate');
const {
  colorvalidation,
  updatecolorvalidation,
  deletecolorvalidation,
} = require('../validation/ColorMasterValidation');

Router.route('/add-color').post([colorvalidation, validate], savecolor);
Router.route('/update-color/:id').put(
  [updatecolorvalidation, validate],
  updatecolor
);
Router.route('/get-color').get(getallcolor);
Router.route('/delete-color/:id').delete(
  [deletecolorvalidation, validate],
  deletecolor
);

module.exports = Router;
