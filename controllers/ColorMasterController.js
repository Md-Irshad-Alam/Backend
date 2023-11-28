const expressAsyncHandler = require("express-async-handler");
const ColorMasterModel = require("../models/ColorMasterModel.js");
const CommonMessage = require("../helpers/CommonMessage");

//save
exports.savecolor = expressAsyncHandler(async (req, res) => {
    try {
        const { color, isActive } = req.body

        await ColorMasterModel.create({ color, isActive }).then(() => {
            res.status(200).json({ message: CommonMessage.savecolor.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.savecolor.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

//edit -update
exports.updatecolor = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const { color } = req.body

        await ColorMasterModel.findOneAndUpdate({ _id: id }, { color }).then((result) => {
            res.status(200).json({ message: CommonMessage.updatecolor.success, success: true, colors: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.updatecolor.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.getallcolor = expressAsyncHandler(async (req, res) => {
    try {
        const { search } = req.query
        let limit = req.query.limit ? Number(req.query.limit) : 10
        let page = req.query.page ? Number(req.query.page) : 1

        let skip = limit * (page - 1)
        let totalPage = Math.ceil(await ColorMasterModel.countDocuments({ color: new RegExp(search, 'i') }) / limit)

        await ColorMasterModel.find({ color: new RegExp(search, 'i') }).skip(skip).limit(limit).then((result) => {
            res.status(200).json({ message: result.count != 0 ? CommonMessage.getallcolor.success : CommonMessage.getallcolor.nocolor, success: true, colors: result, pagination: { limit, page, totalPage } })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.getallcolor.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.togglecolor = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        let colordetails = await ColorMasterModel.findById(id)

        if (!colordetails) {
            res.status(200).json({ message: CommonMessage.togglecolor.notfound, success: false })
        }

        await ColorMasterModel.findByIdAndUpdate(id, { isActive: !colordetails.isActive }, { new: true }).then((result) => {
            res.status(200).json({ message: result.isActive ? CommonMessage.togglecolor.active : CommonMessage.togglecolor.deactive, success: true, colors: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.togglecolor.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

//delete - cancel
exports.deletecolor = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        await ColorMasterModel.findByIdAndDelete(id).then(() => {
            res.status(200).json({ message: CommonMessage.deletecolor.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.deletecolor.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})