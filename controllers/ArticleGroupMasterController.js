const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");
const ArticleGroupMasterModel = require("../models/ArticleGroupMasterModel.js");

exports.saveArticleGroupMaster = expressAsyncHandler(async (req, res) => {
    try {
        const { group_name, isActive } = req.body

        await ArticleGroupMasterModel.create({ group_name, isActive }).then(() => {
            res.status(200).json({ message: CommonMessage.saveArticleGroupMaster.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.saveArticleGroupMaster.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.updateArticleGroupMaster = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const { group_name } = req.body

        await ArticleGroupMasterModel.findOneAndUpdate({ _id: id }, { group_name }).then((result) => {
            res.status(200).json({ message: CommonMessage.updateArticleGroupMaster.success, success: true, countries: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.updateArticleGroupMaster.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.getallArticleGroupMaster = expressAsyncHandler(async (req, res) => {
    try {
        const { search } = req.query
        let limit = req.query.limit ? Number(req.query.limit) : 10
        let page = req.query.page ? Number(req.query.page) : 1

        let skip = limit * (page - 1)
        let totalPage = Math.ceil(await ArticleGroupMasterModel.countDocuments({ group_name: new RegExp(search, 'i') }) / limit)

        await ArticleGroupMasterModel.find({ group_name: new RegExp(search, 'i') }).skip(skip).limit(limit).then((result) => {
            res.status(200).json({ message: result.count != 0 ? CommonMessage.getallArticleGroupMaster.success : CommonMessage.getallArticleGroupMaster.noArticleGroupMaster, success: true, countries: result, pagination: { limit, page, totalPage } })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.getallArticleGroupMaster.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.toggleArticleGroupMaster = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        let ArticleGroupMasterdetails = await ArticleGroupMasterModel.findById(id)

        if (!ArticleGroupMasterdetails) {
            res.status(200).json({ message: CommonMessage.toggleArticleGroupMaster.notfound, success: false })
        }

        await ArticleGroupMasterModel.findByIdAndUpdate(id, { isActive: !ArticleGroupMasterdetails.isActive }, { new: true }).then((result) => {
            res.status(200).json({ message: result.isActive ? CommonMessage.toggleArticleGroupMaster.active : CommonMessage.toggleArticleGroupMaster.deactive, success: true, countries: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.toggleArticleGroupMaster.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.deleteArticleGroupMaster = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        await ArticleGroupMasterModel.findByIdAndDelete(id).then(() => {
            res.status(200).json({ message: CommonMessage.deleteArticleGroupMaster.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.deleteArticleGroupMaster.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})