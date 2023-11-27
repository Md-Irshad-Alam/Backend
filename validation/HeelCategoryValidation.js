const { body, param } = require("express-validator");
const HeelCategoryModel = require("../models/HeelCategoryModel");


exports.HeelCategoryvalidation = [
    body("HeelCategory").notEmpty().withMessage('Provide the HeelCategory name').custom(async (value) => {
        await HeelCategoryModel.findOne({ HeelCategory: value }).then((result) => {
            if (result) {
                throw new Error('HeelCategory is already exists')
            } else {
                return true
            }
        })
    }),
    body("isActive").notEmpty().withMessage('Provide HeelCategory Status').isBoolean().withMessage('This field only accept boolean value')
]

exports.updateHeelCategoryvalidation = [
    param("id").notEmpty().withMessage('Provide HeelCategory id').custom(async (value) => {
        await HeelCategoryModel.findById(value).then((result) => {
            if (!result) {
                // console.log(value);
                throw new Error('HeelCategory is not exists')
            } else {
                return true
            }
        })
    }),
    body("HeelCategory").notEmpty().withMessage('Provide the HeelCategory name').custom(async (value, { req }) => {
        await HeelCategoryModel.findOne({ HeelCategory: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('HeelCategory is already exists')
            } else {
                return true
            }
        })
    }),
]

exports.deleteHeelCategoryvalidation = [
    param("id").notEmpty().withMessage('Provide HeelCategory id').custom(async (value) => {
        await HeelCategoryModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('HeelCategory is not exists')
            }
        })
    })
]