const { body, param } = require("express-validator");
const AddCategoryModel = require("../models/AddCategoryModel");

exports.AddCategoryvalidation = [
    body("category").notEmpty().withMessage('Provide the Category name').custom(async (value) => {
        await AddCategoryModel.findOne({ category: value }).then((result) => {
            if (result) {
                throw new Error('Category is already exists')
            } else {
                return true
            }
        })
    }),
    body("color").notEmpty().withMessage('Provide the Color'),
    body("type").notEmpty().withMessage('Provide the Type'),
    body("store").notEmpty().withMessage('Provide the Store'),
    body("Ingredient").notEmpty().withMessage('Provide the Ingredient'),
    body("weight").notEmpty().withMessage('Provide the weight'),
    body("phr").notEmpty().withMessage('Provide the phr'),
    body("rate").notEmpty().withMessage('Provide the rate'),
    body("flyAshRej").notEmpty().withMessage('Provide the flyAshRej')
]

exports.updateAddCategoryvalidation = [
    param("id").notEmpty().withMessage('Provide Category id').custom(async (value) => {
        await AddCategoryModel.findById(value).then((result) => {
            if (!result) {
                throw new Error('Category is not exists')
            } else {
                return true
            }
        })
    }),
    body("category").notEmpty().withMessage('Provide the Category name').custom(async (value, { req }) => {
        await AddCategoryModel.findOne({ category: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Category is already exists')
            } else {
                return true
            }
        })
    })
]

exports.deleteAddCategoryvalidation = [
    param("id").notEmpty().withMessage('Provide Category id').custom(async (value) => {
        await AddCategoryModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('Category is not exists')
            }
        })
    })
]