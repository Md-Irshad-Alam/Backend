const { body, param } = require("express-validator");
const StoreModel = require("../models/StoreModel");

exports.storevalidation = [
    body("store_name").notEmpty().withMessage('Provide the store name').custom(async (value) => {
        await StoreModel.findOne({ store_name: value }).then((result) => {
            if (result) {
                throw new Error('Store is already exsists')
            } else {
                return true
            }
        })
    }),
    body("remarks").notEmpty().withMessage('Provide the remarks'),
    body("isActive").notEmpty().withMessage('Provide Store Status').isBoolean().withMessage('This field only accept boolean value')
]

exports.updatestorevalidation = [
    param("id").notEmpty().withMessage('Provide store id').custom(async (value) => {
        await StoreModel.findById(value).then((result) => {
            if (!result) {
                throw new Error('Store is not exsists')
            } else {
                return true
            }
        })
    }),
    body("store_name").notEmpty().withMessage('Provide the store name').custom(async (value, { req }) => {
        await StoreModel.findOne({ store_name: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('Store is already exsists')
            } else {
                return true
            }
        })
    }),
    body("remarks").notEmpty().withMessage('Provide the remarks')
]

exports.deletestorevalidation = [
    param("id").notEmpty().withMessage('Provide store id').custom(async (value) => {
        await StoreModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('Store is not exsists')
            }
        })
    })
]