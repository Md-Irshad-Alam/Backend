const Router = require('express').Router();
const { saveForePartCategory, updateForePartCategory, deleteForePartCategory, getallForePartCategory } = require('../controllers/ForePartCategoryController')
const validate = require('../helpers/Validate')

const { ForePartCategoryvalidation, updateForePartCategoryvalidation, deleteForePartCategoryvalidation } = require('../validation/ForePartCategoryValidation.js')

Router.route('/add-ForePartCategory').post([ForePartCategoryvalidation,validate],saveForePartCategory);
Router.route('/update-ForePartCategory/:id').put([updateForePartCategoryvalidation, validate], updateForePartCategory)
Router.route('/get-ForePartCategory').get(getallForePartCategory)
Router.route('/delete-ForePartCategory/:id').delete([deleteForePartCategoryvalidation, validate], deleteForePartCategory)

module.exports = Router;