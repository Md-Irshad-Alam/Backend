const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");
const UOMModel = require("../models/UOMModel");

exports.saveUOM = expressAsyncHandler(async (req, res) => {
    try {
        const { UOM, isActive } = req.body
        await UOMModel.create({ UOM, isActive }).then(() => {
            res.status(200).json({ message: CommonMessage.saveUOM.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.saveUOM.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.updateUOM = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const { UOM } = req.body

        await UOMModel.findOneAndUpdate({ _id: id }, { UOM}).then((result) => {
            res.status(200).json({ message: CommonMessage.updateUOM.success, success: true, UOM: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.updateUOM.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.getallUOM = expressAsyncHandler(async (req, res) => {
    try {
        const { search } = req.query
        let limit = req.query.limit ? Number(req.query.limit) : 10
        let page = req.query.page ? Number(req.query.page) : 1

        let skip = limit * (page - 1)
        let totalPage = Math.ceil(await UOMModel.countDocuments({ state: new RegExp(search, 'i') }) / limit)

        await UOMModel.find({ UOM: new RegExp(search, 'i') }).skip(skip).limit(limit).then((result) => {
            res.status(200).json({ message: result.count != 0 ? CommonMessage.getallUOM.success : CommonMessage.getallUOM.noUOM, success: true, countries: result, pagination: { limit, page, totalPage } })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.getallUOM.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.toggleUOM = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        let UOMdetails = await UOMModel.findById(id)

        if (!UOMdetails) {
            res.status(200).json({ message: CommonMessage.toggleUOM.notfound, success: false })
        }

        await UOMModel.findByIdAndUpdate(id, { isActive: !UOMdetails.isActive }, { new: true }).then((result) => {
            res.status(200).json({ message: result.isActive ? CommonMessage.toggleUOM.active : CommonMessage.toggleUOM.deactive, success: true, countries: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.toggleUOM.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.deleteUOM = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        await UOMModel.findByIdAndDelete(id).then(() => {
            res.status(200).json({ message: CommonMessage.deleteUOM.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.deleteUOM.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})