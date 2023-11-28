const { body, param } = require("express-validator");
const ArticleGroupMasterModel = require("../models/ArticleGroupMasterModel");

exports.ArticleGroupMastervalidation = [
    body("group_name").notEmpty().withMessage('Provide the group_name name').custom(async (value) => {
        await ArticleGroupMasterModel.findOne({ group_name: value }).then((result) => {
            if (result) {
                throw new Error('group name is already exists')
            } else {
                return true
            }
        })
    }),
    body("isActive").notEmpty().withMessage('Provide group Status').isBoolean().withMessage('This field only accept boolean value')
]

exports.updateArticleGroupMastervalidation = [
    param("id").notEmpty().withMessage('Provide ArticleGroupMaster id').custom(async (value) => {
        await ArticleGroupMasterModel.findById(value).then((result) => {
            if (!result) {
                throw new Error('group name is not exists')
            } else {
                return true
            }
        })
    }),
    body("group_name").notEmpty().withMessage('Provide the ArticleGroupMaster name').custom(async (value, { req }) => {
        await ArticleGroupMasterModel.findOne({ group_name: value, _id: { $ne: req.params.id } }).then((result) => {
            if (result) {
                throw new Error('group name is already exists')
            } else {
                return true
            }
        })
    }),
]

exports.deleteArticleGroupMastervalidation = [
    param("id").notEmpty().withMessage('Provide ArticleGroupMaster id').custom(async (value) => {
        await ArticleGroupMasterModel.findById(value).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('group name is not exists')
            }
        })
    })
]