const { body, param } = require("express-validator");
const ProductMidsoleModel = require("../models/ProductMidsoleModel");

exports.ProductMidsoleValidation = [
 
    body("article_details").notEmpty().withMessage('Provide the Product Product Midsole article details').custom(async (value, { req }) => {
        await ProductMidsoleModel.findOne({ article_id: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product Product Midsole article details is already exist')
            } else {
                return true
            }
        })
    }),
    body("article_code").notEmpty().withMessage('Provide the Product article code').custom(async (value, { req }) => {
        await ProductMidsoleModel.findOne({ article_name: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product article code is already exists')
            } else {
                return true
            }
        })
    })
]

exports.updateProductMidsoleValidation = [
    body("article_code").notEmpty().withMessage('Provide the Product article code').custom(async (value, { req }) => {
        await ProductMidsoleModel.findOne({ article_name: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product Midsole article code is already exists')
            } else {
                return true
            }
        })
    })
]

exports.deleteProductMidsoleValidation = [
    param("id").notEmpty().withMessage('Provide Product category_id id').custom(async (value) => {
        await ProductMidsoleModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('ProductMidsole  id is not exists')
            }
        })
    })
]