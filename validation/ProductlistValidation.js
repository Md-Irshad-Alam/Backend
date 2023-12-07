const { body, param } = require("express-validator");
const ProductlistModel = require("../models/ProductlistModel");

exports.ProductlistValidation = [
    param("id").notEmpty().withMessage('Provide Product Category id').custom(async (value) => {
        await ProductlistModel.findById(value).then((result) => {
            if (!result) {
                throw new Error('Product Category is not exists')
            } else {
                return true
            }
        })
    }),
    body("category").notEmpty().withMessage('Provide the Category name').custom(async (value) => {
        await ProductlistModel.findOne({ category: value }).then((result) => {
            if (result) {
                throw new Error('Category is name already exists')
            } else {
                return true
            }
        })
    }),
    body("article_code").notEmpty().withMessage('Provide the Category name').custom(async (value) => {
        await ProductlistModel.findOne({ article_code: value }).then((result) => {
            if (result) {
                throw new Error('article_code is name already exists')
            } else {
                return true
            }
        })
    }),
    body("type").notEmpty().withMessage('Provide the Product Category type').custom(async (value, { req }) => {
        await ProductlistModel.findOne({ type: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product category type is already exist')
            } else {
                return true
            }
        })
    }),
    body("color").notEmpty().withMessage('Provide the Product Category color').custom(async (value, { req }) => {
        await ProductlistModel.findOne({ color: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product category color is already exists')
            } else {
                return true
            }
        })
    })
]

exports.updateProductlistValidation = [
    param("id").notEmpty().withMessage('Provide Product Category id').custom(async (value) => {
        await ProductlistModel.findById(value).then((result) => {
            if (!result) {
                throw new Error('Productlist is not exists')
            } else {
                return true
            }
        })
    }),
    body("article_code").notEmpty().withMessage('Provide the Category name').custom(async (value) => {
        await ProductlistModel.findOne({ article_code: value }).then((result) => {
            if (result) {
                throw new Error('article_code is name already exists')
            } else {
                return true
            }
        })
    }),
    body("category").notEmpty().withMessage('Provide the Product Category name').custom(async (value, { req }) => {
        await ProductlistModel.findOne({ category: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product category is already exists')
            } else {
                return true
            }
        })
    }),
    body("type").notEmpty().withMessage('Provide the Product Category type').custom(async (value, { req }) => {
        await ProductlistModel.findOne({ type: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product category type is already exist')
            } else {
                return true
            }
        })
    }),
    body("color").notEmpty().withMessage('Provide the Product Category color').custom(async (value, { req }) => {
        await ProductlistModel.findOne({ color: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product category color is already exists')
            } else {
                return true
            }
        })
    })
]

exports.deleteProductlistValidation = [
    param("id").notEmpty().withMessage('Provide Product Category id').custom(async (value) => {
        await ProductlistModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('Productlist is not exists')
            }
        })
    })
]