const Router = require('express').Router();
const { saveHeelCategory, updateHeelCategory, deleteHeelCategory, getallHeelCategory } = require('../controllers/HeelCategoryController.js')
const validate = require('../helpers/Validate')

const { HeelCategoryvalidation, updateHeelCategoryvalidation, deleteHeelCategoryvalidation } = require('../validation/HeelCategoryValidation.js')

Router.route('/add-HeelCategory').post([HeelCategoryvalidation,validate],saveHeelCategory);
Router.route('/update-HeelCategory/:id').put([updateHeelCategoryvalidation, validate], updateHeelCategory)
Router.route('/get-HeelCategory').get(getallHeelCategory)
Router.route('/delete-HeelCategory/:id').delete([deleteHeelCategoryvalidation, validate], deleteHeelCategory)

module.exports = Router;