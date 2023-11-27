const { body, param } = require("express-validator");
const ForePartCategoryModel = require("../models/ForePartCategoryModel");


exports.ForePartCategoryvalidation = [
    body("ForePartCategory").notEmpty().withMessage('Provide the ForePartCategory name').custom(async (value) => {
        await ForePartCategoryModel.findOne({ ForePartCategory: value }).then((result) => {
            if (result) {
                throw new Error('ForePartCategory is already exists')
            } else {
                return true
            }
        })
    }),
    body("isActive").notEmpty().withMessage('Provide ForePartCategory Status').isBoolean().withMessage('This field only accept boolean value')
]

exports.updateForePartCategoryvalidation = [
    param("id").notEmpty().withMessage('Provide ForePartCategory id').custom(async (value) => {
        await ForePartCategoryModel.findById(value).then((result) => {
            if (!result) {
                 console.log(value);
                throw new Error('ForePartCategory is not exists')
            } else {
                return true
            }
        })
    }),
    body("ForePartCategory").notEmpty().withMessage('Provide the ForePartCategory name').custom(async (value, { req }) => {
        await ForePartCategoryModel.findOne({ ForePartCategory: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('ForePartCategory is already exists')
            } else {
                return true
            }
        })
    }),
]

exports.deleteForePartCategoryvalidation = [
    param("id").notEmpty().withMessage('Provide ForePartCategory id').custom(async (value) => {
        await ForePartCategoryModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('ForePartCategory is not exists')
            }
        })
    })
]