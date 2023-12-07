const Router = require('express').Router()

const {getProductCategories,saveProductlist,updateProductlist,deleteProductlist } = require('../controllers/ProductlistController.js')
const validate = require('../helpers/Validate')

const { ProductlistValidation, updateProductlistValidation, deleteProductlistValidation } = require('../validation/ProductlistValidation.js')

Router.route('/add-Productlist').post([ProductlistValidation, validate],saveProductlist)
Router.route('/update-Productlist/:id').put([updateProductlistValidation, validate],updateProductlist)
Router.route('/get-Productlist').get(getProductCategories)
Router.route('/delete-Productlist/:id').delete([deleteProductlistValidation, validate], deleteProductlist)

module.exports = Router;