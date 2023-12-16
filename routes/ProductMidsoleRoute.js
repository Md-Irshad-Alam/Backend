const Router = require('express').Router()

const {getallProductMidsole,saveProductMidsole,updateProductMidsole,deleteProductMidsole } = require('../controllers/ProductMidsoleController.js')
const validate = require('../helpers/Validate')

const { ProductMidsoleValidation, updateProductMidsoleValidation, deleteProductMidsoleValidation } = require('../validation/ProductMidsoleValidation.js')

Router.route('/add-ProductMidsole').post([ProductMidsoleValidation, validate],saveProductMidsole)
Router.route('/update-ProductMidsole/:id').put([updateProductMidsoleValidation, validate],updateProductMidsole)
Router.route('/get-ProductMidsole').get(getallProductMidsole)
Router.route('/delete-ProductMidsole/:id').delete([deleteProductMidsoleValidation, validate], deleteProductMidsole)

module.exports = Router;