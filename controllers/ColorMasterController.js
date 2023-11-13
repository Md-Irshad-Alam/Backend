const expressAsyncHandler = require("express-async-handler");
const ColorMasterModel = require("../models/ColorMasterModel");
const CommonMessage = require("../helpers/CommonMessage");

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