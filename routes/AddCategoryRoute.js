const Router = require('express').Router()

const { saveAddCategory, updateAddCategory, deleteAddCategory, getallAddCategory } = require('../controllers/AddCategoryController.js')
const validate  = require('../helpers/Validate')
const { AddCategoryvalidation, updateAddCategoryvalidation, deleteAddCategoryvalidation } = require('../validation/AddCategoryValidation.js')


Router.route('/add-AddCategory').post([AddCategoryvalidation, validate], saveAddCategory)
// Router.route('/update-AddCategory/:id').put([updateAddCategoryvalidation, validate], updateAddCategory)
// Router.route('/get-AddCategory').get(getallAddCategory)
// Router.route('/delete-AddCategory/:id').delete([deleteAddCategoryvalidation, validate], deleteAddCategory)

module.exports = Router