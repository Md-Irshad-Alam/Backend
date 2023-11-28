const { body, param } = require("express-validator");
const stateMasterModel = require("../models/stateMasterModel.js");

exports.stateMastervalidation = [
    body("state").notEmpty().withMessage('Provide the stateMaster name').custom(async (value) => {
        await stateMasterModel.findOne({ state: value }).then((result) => {
            if (result) {
                throw new Error('state is already exists')
            } else {
                return true
            }
        })
    }),
    body("isActive").notEmpty().withMessage('Provide state Status').isBoolean().withMessage('This field only accept boolean value')
]

exports.updatestateMastervalidation = [
    param("id").notEmpty().withMessage('Provide state id').custom(async (value) => {
        await stateMasterModel.findById(value).then((result) => {
            if (!result) {
                throw new Error('state is not exists')
            } else {
                return true
            }
        })
    }),
    body("state").notEmpty().withMessage('Provide the state name').custom(async (value, { req }) => {
        await stateMasterModel.findOne({ state: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('state is already exists')
            } else {
                return true
            }
        })
    }),
]

exports.deletestateMastervalidation = [
    param("id").notEmpty().withMessage('Provide state id').custom(async (value) => {
        await stateMasterModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('state is not exists')
            }
        })
    })
]