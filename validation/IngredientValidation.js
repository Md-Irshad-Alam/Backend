const { body, param } = require("express-validator");
const IngredientModel = require("../models/IngredientModel");

exports.IngredientValidation = [
    body("Ingredient").notEmpty().withMessage('Provide the Ingredient name').custom(async (value) => {
        await IngredientModel.findOne({ Ingredient: value }).then((result) => {
            if (result) {
                throw new Error('Ingredient is already exists')
            } else {
                return true
            }
        })
    }),
    body("Details").notEmpty().withMessage('Provide the Details'),
    body("isActive").notEmpty().withMessage('Provide Ingredient Status').isBoolean().withMessage('This field only accept boolean value')
]

exports.updateIngredientValidation = [
    param("id").notEmpty().withMessage('Provide Ingredient id').custom(async (value) => {
        await IngredientModel.findById(value).then((result) => {
            if (!result) {
                throw new Error('Ingredient is not exists')
            } else {
                return true
            }
        })
    }),
    body("Ingredient").notEmpty().withMessage('Provide the Ingredient name').custom(async (value, { req }) => {
        await IngredientModel.findOne({ Ingredient: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Ingredient is already exists')
            } else {
                return true
            }
        })
    }),
    body("Details").notEmpty().withMessage('Provide the Details')
]

exports.deleteIngredientValidation = [
    param("id").notEmpty().withMessage('Provide Ingredient id').custom(async (value) => {
        await IngredientModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('Ingredient is not exists')
            }
        })
    })
]