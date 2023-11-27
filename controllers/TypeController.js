const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");
const TypeModel = require("../models/TypeModel");


exports.saveType = expressAsyncHandler(async (req, res) => {
    try {
        const { Type, isActive } = req.body
        await TypeModel.create({ Type, isActive }).then(() => {
            res.status(200).json({ message: CommonMessage.saveType.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.saveType.failed, success: false, error: error.toString() })
        })
    } 
    catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.updateType = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const { Type } = req.body

        await TypeModel.findOneAndUpdate({ _id: id }, { Type }).then((result) => {
            res.status(200).json({ message: CommonMessage.updateType.success, success: true, countries: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.updateType.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.getallType = expressAsyncHandler(async (req, res) => {
    try {
        const { search } = req.query
        let limit = req.query.limit ? Number(req.query.limit) : 10
        let page = req.query.page ? Number(req.query.page) : 1

        let skip = limit * (page - 1)
        let totalPage = Math.ceil(await TypeModel.countDocuments({ Type: new RegExp(search, 'i') }) / limit)

        await TypeModel.find({ Type: new RegExp(search, 'i') }).skip(skip).limit(limit).then((result) => {
            res.status(200).json({ message: result.count != 0 ? CommonMessage.getallType.success : CommonMessage.getallType.noType, success: true, countries: result, pagination: { limit, page, totalPage } })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.getallType.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.toggleType = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        
        let Typedetails = await TypeModel.findById(id)

        if (!Typedetails) {
            res.status(200).json({ message: CommonMessage.toggleType.notfound, success: false })
        }

        await TypeModel.findByIdAndUpdate(id, { isActive: !Typedetails.isActive }, { new: true }).then((result) => {
            res.status(200).json({ message: result.isActive ? CommonMessage.toggleType.active : CommonMessage.toggleType.deactive, success: true, countries: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.toggleType.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.deleteType = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        await TypeModel.findByIdAndDelete(id).then(() => {
            res.status(200).json({ message: CommonMessage.deleteType.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.deleteType.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})
