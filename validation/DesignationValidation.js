const { body, param } = require("express-validator");
const DesignationModel = require("../models/DesignationModel");

exports.designationvalidation = [
    body("designation").notEmpty().withMessage('Provide the designation name').custom(async (value) => {
        await DesignationModel.findOne({ designation: value }).then((result) => {
            if (result) {
                throw new Error('Designation is already exists')
            } else {
                return true
            }
        })
    }),
    body("isActive").notEmpty().withMessage('Provide Designation Status').isBoolean().withMessage('This field only accept boolean value')
]

exports.updatedesignationvalidation = [
    param("id").notEmpty().withMessage('Provide designation id').custom(async (value) => {
        await DesignationModel.findById(value).then((result) => {
            if (!result) {
                throw new Error('Designation is not exists')
            } else {
                return true
            }
        })
    }),
    body("designation").notEmpty().withMessage('Provide the designation name').custom(async (value, { req }) => {
        await DesignationModel.findOne({ designation: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Designation is already exists')
            } else {
                return true
            }
        })
    })
]

exports.deletedesignationvalidation = [
    param("id").notEmpty().withMessage('Provide designation id').custom(async (value) => {
        await DesignationModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('Designation is not exists')
            }
        })
    })
]