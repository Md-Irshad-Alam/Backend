const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");
const ForePartCategoryModel = require("../models/ForePartCategoryModel");


exports.saveForePartCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { ForePartCategory, isActive } = req.body
        await ForePartCategoryModel.create({ ForePartCategory, isActive }).then(() => {
            res.status(200).json({ message: CommonMessage.saveForePartCategory.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.saveForePartCategory.failed, success: false, error: error.toString() })
        })
    } 
    catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.updateForePartCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const { ForePartCategory } = req.body

        await ForePartCategoryModel.findOneAndUpdate({ _id: id }, { ForePartCategory }).then((result) => {
            res.status(200).json({ message: CommonMessage.updateForePartCategory.success, success: true, countries: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.updateForePartCategory.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.getallForePartCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { search } = req.query
        let limit = req.query.limit ? Number(req.query.limit) : 10
        let page = req.query.page ? Number(req.query.page) : 1

        let skip = limit * (page - 1)
        let totalPage = Math.ceil(await ForePartCategoryModel.countDocuments({ ForePartCategory:  new RegExp(search, 'i')}) / limit)

        await ForePartCategoryModel.find({ ForePartCategory: new RegExp(search, 'i') }).skip(skip).limit(limit).then((result) => {
            res.status(200).json({ message: result.count != 0 ? CommonMessage.getallForePartCategory.success : CommonMessage.getallForePartCategory.noForePartCategory, success: true, countries: result, pagination: { limit, page, totalPage } })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.getallForePartCategory.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.toggleForePartCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        let ForePartCategorydetails = await ForePartCategoryModel.findById(id)

        if (!ForePartCategorydetails) {
            res.status(200).json({ message: CommonMessage.toggleForePartCategory.notfound, success: false })
        }

        await ForePartCategoryModel.findByIdAndUpdate(id, { isActive: !ForePartCategorydetails.isActive }, { new: true }).then((result) => {
            res.status(200).json({ message: result.isActive ? CommonMessage.toggleForePartCategory.active : CommonMessage.toggleForePartCategory.deactive, success: true, countries: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.toggleForePartCategory.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.deleteForePartCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        await ForePartCategoryModel.findByIdAndDelete(id).then(() => {
            res.status(200).json({ message: CommonMessage.deleteForePartCategory.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.deleteForePartCategory.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})
