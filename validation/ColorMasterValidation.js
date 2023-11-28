const { body, param } = require("express-validator");
const ColorMasterModel = require("../models/ColorMasterModel.js");

exports.colorvalidation = [
    body("color").notEmpty().withMessage('Provide the color name').custom(async (value) => {
        await ColorMasterModel.findOne({ color: value }).then((result) => {
            if (result) {
                throw new Error('Color is already exsists')
            } else {
                return true
            }
        })
    }),
    body("isActive").notEmpty().withMessage('Provide Color Status').isBoolean().withMessage('This field only accept boolean value')
]

exports.updatecolorvalidation = [
    param("id").notEmpty().withMessage('Provide color id').custom(async (value) => {
        await ColorMasterModel.findById(value).then((result) => {
            if (!result) {
                throw new Error('Colour is not exsists')
            } else {
                return true
            }
        })
    }),
    body("color").notEmpty().withMessage('Provide the color name').custom(async (value, { req }) => {
        await ColorMasterModel.findOne({ color: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Color is already exsists')
            } else {
                return true
            }
        })
    })
]

exports.deletecolorvalidation = [
    param("id").notEmpty().withMessage('Provide color id').custom(async (value) => {
        await ColorMasterModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('Color is not exsists')
            }
        })
    })
]