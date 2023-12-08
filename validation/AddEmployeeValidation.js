const { body, param } = require("express-validator");
const AddEmployeeModel = require("../models/AddEmployeeModel");

exports.AddEmployeevalidation = [
    body("Employee_Name").notEmpty().withMessage('Provide the Employee name').custom(async (value) => {
        await AddEmployeeModel.findOne({ Employee_name: value }).then((result) => {
            if (result) {
                throw new Error('Employee is already exists')
            } else {
                return true
            }
        })
    }),
    body("Card_No").notEmpty().withMessage('Provide the Card_No'),
    body("isActive").notEmpty().withMessage('Provide Employee Status').isBoolean().withMessage('This field only accept boolean value')
]

exports.updateAddEmployeevalidation = [
    param("id").notEmpty().withMessage('Provide Employee id').custom(async (value) => {
        await AddEmployeeModel.findById(value).then((result) => {
            if (!result) {
                throw new Error('Employee is not exists')
            } else {
                return true
            }
        })
    }),
    body("Employee_Name").notEmpty().withMessage('Provide the Employee name').custom(async (value, { req }) => {
        await AddEmployeeModel.findOne({ Employee_Name: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Employee is already exists')
            } else {
                return true
            }
        })
    }),
    body("Card_No").notEmpty().withMessage('Provide the Card_No'),
]

exports.deleteAddEmployeevalidation = [
    param("id").notEmpty().withMessage('Provide Employee id').custom(async (value) => {
        await AddEmployeeModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('Employee is not exists')
            }
        })
    })
]