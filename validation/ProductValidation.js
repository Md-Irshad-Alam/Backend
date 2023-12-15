const { body, param } = require("express-validator");
const ProductModel = require("../models/ProductModel");

exports.ProductValidation = [



]

exports.updateProductValidation = [
    param("id").notEmpty().withMessage('Provide Product Category id').custom(async (value) => {
        await ProductModel.findById(value).then((result) => {
            if (!result) {
                throw new Error('Product is not exists')
            } else {
                return true
            }
        })
    }),
    body("article_code").notEmpty().withMessage('Provide the Category code').custom(async (value) => {
        await ProductModel.findOne({ article_code: value }).then((result) => {
            if (result) {
                throw new Error('article_code is name already exists')
            } else {
                return true
            }
        })
    })

]

exports.deleteProductValidation = [
    param("id").notEmpty().withMessage('Provide Product Category id').custom(async (value) => {
        await ProductModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('Product is not exists')
            }
        })
    })
]