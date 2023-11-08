const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");
const StoreModel = require("../models/StoreModel");

exports.saveStore = expressAsyncHandler(async (req, res) => {
    try {
        const { store_name, remarks } = req.body

        await StoreModel.create({ store_name, remarks }).then(() => {
            res.status(200).json({ message: CommonMessage.storesave.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.storesave.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})