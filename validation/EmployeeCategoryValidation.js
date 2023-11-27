const { body, param } = require("express-validator");
const EmployeeCategoryModel = require("../models/EmployeeCategoryModel");

exports.EmployeeCategoryvalidation = [
    body("EmployeeCategory").notEmpty().withMessage('Provide the EmployeeCategory name').custom(async (value) => {
        await EmployeeCategoryModel.findOne({ EmployeeCategory: value }).then((result) => {
            if (result) {
                throw new Error('EmployeeCategory is already exists')
            } else {
                return true
            }
        })
    }),
    body("isActive").notEmpty().withMessage('Provide EmployeeCategory Status').isBoolean().withMessage('This field only accept boolean value')
]

exports.updateEmployeeCategoryvalidation = [
    param("id").notEmpty().withMessage('Provide EmployeeCategory id').custom(async (value) => {
        await EmployeeCategoryModel.findById(value).then((result) => {
            if (!result) {
                throw new Error('EmployeeCategory is not exists')
            } else {
                return true
            }
        })
    }),
    body("EmployeeCategory").notEmpty().withMessage('Provide the EmployeeCategory name').custom(async (value, { req }) => {
        await EmployeeCategoryModel.findOne({ EmployeeCategory: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('EmployeeCategory is already exists')
            } else {
                return true
            }
        })
    })
]

exports.deleteEmployeeCategoryvalidation = [
    param("id").notEmpty().withMessage('Provide EmployeeCategory id').custom(async (value) => {
        await EmployeeCategoryModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('EmployeeCategory is not exists')
            }
        })
    })
]