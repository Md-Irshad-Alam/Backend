const Router = require('express').Router()

const {getProductCategories,uploadImage,saveProduct,updateProduct,deleteProduct } = require('../controllers/ProductController.js')
const validate = require('../helpers/Validate')

const { ProductValidation, updateProductValidation, deleteProductValidation } = require('../validation/ProductValidation.js')

Router.route('/add-Product').post([ProductValidation, validate],[uploadImage,saveProduct])
Router.route('/update-Product/:id').put([updateProductValidation, validate],updateProduct)
Router.route('/get-Product').get(getProductCategories)
Router.route('/delete-Product/:id').delete([deleteProductValidation, validate], deleteProduct)

module.exports = Router;