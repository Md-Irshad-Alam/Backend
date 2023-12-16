const { body, param } = require("express-validator");
const StandardWeightModel = require("../models/StandardWeightModel");

exports.StandardWeightValidation = [
    body("category_id").notEmpty().withMessage('Provide the category_id name').custom(async (value) => {
        await StandardWeightModel.findOne({ category_id: value }).then((result) => {
            if (result) {
                throw new Error('category_id is name already exists')
            } else {
                return true
            }
        })
    }),
    body("article_id").notEmpty().withMessage('Provide the Product category_id article_id').custom(async (value, { req }) => {
        await StandardWeightModel.findOne({ article_id: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product category_id article_id is already exist')
            } else {
                return true
            }
        })
    }),
    body("article_name").notEmpty().withMessage('Provide the Product category_id article_name').custom(async (value, { req }) => {
        await StandardWeightModel.findOne({ article_name: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product category_id article_name is already exists')
            } else {
                return true
            }
        })
    })
]

exports.updateStandardWeightValidation = [
    body("category_id").notEmpty().withMessage('Provide the Product category_id name').custom(async (value, { req }) => {
        await StandardWeightModel.findOne({ category_id: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product category_id is already exists')
            } else {
                return true
            }
        })
    }),
    body("article_id").notEmpty().withMessage('Provide the Product category_id article_id').custom(async (value, { req }) => {
        await StandardWeightModel.findOne({ article_id: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product category_id article_id is already exist')
            } else {
                return true
            }
        })
    }),
    body("article_name").notEmpty().withMessage('Provide the Product category_id article_name').custom(async (value, { req }) => {
        await StandardWeightModel.findOne({ article_name: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Product category_id article_name is already exists')
            } else {
                return true
            }
        })
    })
]

exports.deleteStandardWeightValidation = [
    param("id").notEmpty().withMessage('Provide Product category_id id').custom(async (value) => {
        await StandardWeightModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('StandardWeight is not exists')
            }
        })
    })
]