const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");
const AddCategoryModel = require("../models/AddCategoryModel");

exports.saveAddCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { Category,Color,Type,Store,Ingredient,weight,phr,rate,fly_ash_rej, isActive } = req.body
        await AddCategoryModel.create({ Category,Color,Type,Store,Ingredient,weight,phr,rate,fly_ash_rej,price, isActive }).then(() => {
            res.status(200).json({ message: CommonMessage.saveAddCategory.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.saveAddCategory.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})





















exports.updateAddCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const { Category,Color,Type,Store,Ingredient,weight,phr,rate,fly_ash_rej } = req.body

        await AddCategoryModel.findOneAndUpdate({ _id: id }, { Category,Color,Type,Store,Ingredient,weight,phr,rate,fly_ash_rej }).then((result) => {
            res.status(200).json({ message: CommonMessage.updateAddCategory.success, success: true, countries: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.updateAddCategory.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})
exports.deleteAddCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        await AddCategoryModel.findByIdAndDelete(id).then(() => {
            res.status(200).json({ message: CommonMessage.deleteAddCategory.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.deleteAddCategory.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})