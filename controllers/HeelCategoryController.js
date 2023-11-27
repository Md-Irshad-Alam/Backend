const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");
const HeelCategoryModel = require("../models/HeelCategoryModel");


exports.saveHeelCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { HeelCategory, isActive } = req.body
        await HeelCategoryModel.create({ HeelCategory, isActive }).then(() => {
            res.status(200).json({ message: CommonMessage.saveHeelCategory.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.saveHeelCategory.failed, success: false, error: error.toString() })
        })
    } 
    catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.updateHeelCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const { HeelCategory } = req.body

        await HeelCategoryModel.findOneAndUpdate({ _id: id }, { HeelCategory }).then((result) => {
            res.status(200).json({ message: CommonMessage.updateHeelCategory.success, success: true, countries: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.updateHeelCategory.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.getallHeelCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { search } = req.query
        let limit = req.query.limit ? Number(req.query.limit) : 10
        let page = req.query.page ? Number(req.query.page) : 1

        let skip = limit * (page - 1)
        let totalPage = Math.ceil(await HeelCategoryModel.countDocuments({ HeelCategory: new RegExp(search, 'i') }) / limit)

        await HeelCategoryModel.find({ HeelCategory: new RegExp(search, 'i') }).skip(skip).limit(limit).then((result) => {
            res.status(200).json({ message: result.count != 0 ? CommonMessage.getallHeelCategory.success : CommonMessage.getallHeelCategory.noHeelCategory, success: true, countries: result, pagination: { limit, page, totalPage } })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.getallHeelCategory.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.toggleHeelCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        let HeelCategorydetails = await HeelCategoryModel.findById(id)

        if (!HeelCategorydetails) {
            res.status(200).json({ message: CommonMessage.toggleHeelCategory.notfound, success: false })
        }

        await HeelCategoryModel.findByIdAndUpdate(id, { isActive: !HeelCategorydetails.isActive }, { new: true }).then((result) => {
            res.status(200).json({ message: result.isActive ? CommonMessage.toggleHeelCategory.active : CommonMessage.toggleHeelCategory.deactive, success: true, countries: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.toggleHeelCategory.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.deleteHeelCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        await HeelCategoryModel.findByIdAndDelete(id).then(() => {
            res.status(200).json({ message: CommonMessage.deleteHeelCategory.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.deleteHeelCategory.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})
