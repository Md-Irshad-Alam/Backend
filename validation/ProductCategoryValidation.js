const { body, param } = require("express-validator");
const ProductCategoryModel = require("../models/ProductCategoryModel");

exports.ProductCategoryValidation = [
    param("id").notEmpty().withMessage('Provide Product Category id').custom(async (value) => {
        await ProductCategoryModel.findById(value).then((result) => {
            if (!result) {
                throw new Error('Product Category is not exists')
            } else {
                return true
            }
        })
    }),
    body("category").notEmpty().withMessage('Provide the Category name').custom(async (value) => {
        await ProductCategoryModel.findOne({ category: value }).then((result) => {
            if (result) {
                throw new Error('Category is name already exists')
            } else {
                return true
            }
        })
    }),
    body("type").notEmpty().withMessage('Provide the Product Category type').custom(async (value, { req }) => {
        await ProductCategoryModel.findOne({ type: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product category type is already exist')
            } else {
                return true
            }
        })
    }),
    body("color").notEmpty().withMessage('Provide the Product Category color').custom(async (value, { req }) => {
        await ProductCategoryModel.findOne({ color: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product category color is already exists')
            } else {
                return true
            }
        })
    })
]

exports.updateProductCategoryValidation = [
    param("id").notEmpty().withMessage('Provide Product Category id').custom(async (value) => {
        await ProductCategoryModel.findById(value).then((result) => {
            if (!result) {
                throw new Error('ProductCategory is not exists')
            } else {
                return true
            }
        })
    }),
    body("category").notEmpty().withMessage('Provide the Product Category name').custom(async (value, { req }) => {
        await ProductCategoryModel.findOne({ category: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product category is already exists')
            } else {
                return true
            }
        })
    }),
    body("type").notEmpty().withMessage('Provide the Product Category type').custom(async (value, { req }) => {
        await ProductCategoryModel.findOne({ type: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product category type is already exist')
            } else {
                return true
            }
        })
    }),
    body("color").notEmpty().withMessage('Provide the Product Category color').custom(async (value, { req }) => {
        await ProductCategoryModel.findOne({ color: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product category color is already exists')
            } else {
                return true
            }
        })
    })
]

exports.deleteProductCategoryValidation = [
    param("id").notEmpty().withMessage('Provide Product Category id').custom(async (value) => {
        await ProductCategoryModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('ProductCategory is not exists')
            }
        })
    })
]