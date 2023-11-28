const { body, param } = require("express-validator");
const CountryModel = require("../models/CountryModel.js");

exports.countryvalidation = [
    body("country").notEmpty().withMessage('Provide the country name').custom(async (value) => {
        await CountryModel.findOne({ country: value }).then((result) => {
            if (result) {
                throw new Error('Country is already exsists')
            } else {
                return true
            }
        })
    }),
    body("isActive").notEmpty().withMessage('Provide Country Status').isBoolean().withMessage('This field only accept boolean value')
]

exports.updatecountryvalidation = [
    param("id").notEmpty().withMessage('Provide country id').custom(async (value) => {
        await CountryModel.findById(value).then((result) => {
            if (!result) {
                throw new Error('Country is not exsists')
            } else {
                return true
            }
        })
    }),
    body("country").notEmpty().withMessage('Provide the country name').custom(async (value, { req }) => {
        await CountryModel.findOne({ country: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Country is already exsists')
            } else {
                return true
            }
        })
    }),
]

exports.deletecountryvalidation = [
    param("id").notEmpty().withMessage('Provide country id').custom(async (value) => {
        await CountryModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('Country is not exsists')
            }
        })
    })
]