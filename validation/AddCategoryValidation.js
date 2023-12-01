const { body, param } = require("express-validator");
const AddCategoryModel = require("../models/AddCategoryModel");

exports.AddCategoryvalidation = [
    body("Category_name").notEmpty().withMessage('Provide the Category name').custom(async (value) => {
        await AddCategoryModel.findOne({ Category_name: value }).then((result) => {
            if (result) {
                throw new Error('Category is already exists')
            } else {
                return true
            }
        })
    }),
    body("Color").notEmpty().withMessage('Provide the Color'),
    body("Type").notEmpty().withMessage('Provide the Type'),
    body("Store").notEmpty().withMessage('Provide the Store'),
    body("Ingredient").notEmpty().withMessage('Provide the Ingredient'),
    body("weight").notEmpty().withMessage('Provide the weight'),
    body("phr").notEmpty().withMessage('Provide the phr'),
    body("rate").notEmpty().withMessage('Provide the rate'),
    body("fly_ash_rej").notEmpty().withMessage('Provide the fly_ash_rej'),
    body("isActive").notEmpty().withMessage('Provide Category Status').isBoolean().withMessage('This field only accept boolean value')
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
    body("Category_name").notEmpty().withMessage('Provide the Category name').custom(async (value, { req }) => {
        await AddCategoryModel.findOne({ Category_name: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Category is already exists')
            } else {
                return true
            }
        })
    }),
    body("Color").notEmpty().withMessage('Provide the Color'),
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