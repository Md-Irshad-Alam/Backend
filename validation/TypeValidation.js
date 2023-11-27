const { body, param } = require("express-validator");
const TypeModel = require("../models/TypeModel");


exports.TypeValidation = [
    body("Type").notEmpty().withMessage('Provide the Type name').custom(async (value) => {
        await TypeModel.findOne({ Type: value }).then((result) => {
            if (result) {
                throw new Error('Type is already exists')
            } else {
                return true
            }
        })
    }),
    body("isActive").notEmpty().withMessage('Provide Type Status').isBoolean().withMessage('This field only accept boolean value')
]

exports.updateTypeValidation = [
    param("id").notEmpty().withMessage('Provide Type id').custom(async (value) => {
        await TypeModel.findById(value).then((result) => {
            if (!result) {
                // console.log(value);
                throw new Error('Type is not exists')
            } else {
                return true
            }
        })
    }),
    body("Type").notEmpty().withMessage('Provide the Type name').custom(async (value, { req }) => {
        await TypeModel.findOne({ Type: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Type is already exists')
            } else {
                return true
            }
        })
    }),
]

exports.deleteTypeValidation = [
    param("id").notEmpty().withMessage('Provide Type id').custom(async (value) => {
        await TypeModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('Type is not exists')
            }
        })
    })
]