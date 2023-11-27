const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");
const StoreModel = require("../models/StoreModel");

exports.saveStore = expressAsyncHandler(async (req, res) => {
    try {
        const { store_name, remarks, isActive } = req.body

        await StoreModel.create({ store_name, remarks, isActive }).then(() => {
            res.status(200).json({ message: CommonMessage.storesave.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.storesave.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.updatestore = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        const { store_name, remarks } = req.body
        await StoreModel.findOneAndUpdate({ _id: id }, { store_name, remarks }).then((result) => {
            res.status(200).json({ message: CommonMessage.updatestore.success, success: true, stores: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.updatestore.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.getallstore = expressAsyncHandler(async (req, res) => {
    try {
        const { search } = req.query
        let limit = req.query.limit ? Number(req.query.limit) : 10
        let page = req.query.page ? Number(req.query.page) : 1

        let skip = limit * (page - 1)
        let totalPage = Math.ceil(await StoreModel.countDocuments({ store_name: { $regex: search, $option: "i" } }) / limit)

        await StoreModel.find({ store_name: { $regex: search } }).skip(skip).limit(limit).then((result) => {
            res.status(200).json({ message: result.count != 0 ? CommonMessage.getallstore.success : CommonMessage.getallstore.nostore, success: true, stores: result, pagination: { limit, page, totalPage } })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.getallstore.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.togglestore = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        let storedetails = await StoreModel.findById(id)

        if (!storedetails) {
            res.status(200).json({ message: CommonMessage.togglestore.notfound, success: false })
        }

        await StoreModel.findByIdAndUpdate(id, { isActive: !storedetails.isActive }, { new: true }).then((result) => {
            res.status(200).json({ message: result.isActive ? CommonMessage.togglestore.active : CommonMessage.togglestore.deactive, success: true, stores: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.togglestore.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.deletestore = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        await StoreModel.findByIdAndDelete(id).then(() => {
            res.status(200).json({ message: CommonMessage.deletestore.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.deletestore.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})