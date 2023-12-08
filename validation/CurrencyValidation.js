const { body, param } = require("express-validator");
const CurrencyModel = require("../models/CurrencyModel");

exports.Currencyvalidation = [
    body("Currency").notEmpty().withMessage('Provide the Currency name').custom(async (value) => {
        await CurrencyModel.findOne({ Currency: value }).then((result) => {
            if (result) {
                throw new Error('Currency is already exists')
            } else {
                return true
            }
        })
    }),
    body("isActive").notEmpty().withMessage('Provide group Status').isBoolean().withMessage('This field only accept boolean value')
]

exports.updateCurrencyvalidation = [
    param("id").notEmpty().withMessage('Provide Currency id').custom(async (value) => {
        await CurrencyModel.findById(value).then((result) => {
            if (!result) {
                throw new Error('Currency is not exists')
            } else {
                return true
            }
        })
    }),
    body("Currency").notEmpty().withMessage('Provide the Currency name').custom(async (value, { req }) => {
        await CurrencyModel.findOne({ Currency: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Currency is already exists')
            } else {
                return true
            }
        })
    }),
]

exports.deleteCurrencyvalidation = [
    param("id").notEmpty().withMessage('Provide Currency id').custom(async (value) => {
        await CurrencyModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('Currency is not exists')
            }
        })
    })
]