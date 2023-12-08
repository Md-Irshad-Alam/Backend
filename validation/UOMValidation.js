const { body, param } = require("express-validator");
const UOMModel = require("../models/UOMModel");


exports.UOMValidation = [
    body("UOM").notEmpty().withMessage('Provide the UOM name').custom(async (value) => {
        await UOMModel.findOne({ UOM: value }).then((result) => {
            if (result) {
                throw new Error('UOM is already exists')
            } else {
                return true
            }
        })
    }),
    body("isActive").notEmpty().withMessage('Provide UOM Status').isBoolean().withMessage('This field only accept boolean value')
]

exports.updateUOMValidation = [
    param("id").notEmpty().withMessage('Provide UOM id').custom(async (value) => {
        await UOMModel.findById(value).then((result) => {
            if (!result) {
                // console.log(value);
                throw new Error('UOM is not exists')
            } else {
                return true
            }
        })
    }),
    body("UOM").notEmpty().withMessage('Provide the UOM name').custom(async (value, { req }) => {
        await UOMModel.findOne({ UOM: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('UOM is already exists')
            } else {
                return true
            }
        })
    }),
]

exports.deleteUOMValidation = [
    param("id").notEmpty().withMessage('Provide UOM id').custom(async (value) => {
        await UOMModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('UOM is not exists')
            }
        })
    })
]