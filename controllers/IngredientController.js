const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");
const IngredientModel = require("../models/IngredientModel");

exports.saveIngredient = expressAsyncHandler(async (req, res) => {
    try {
        const { Ingredient, Details, isActive } = req.body

        await IngredientModel.create({ Ingredient, Details, isActive }).then(() => {
            res.status(200).json({ message: CommonMessage.saveIngredient.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.Ingredientsave.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.updateIngredient = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        const { Ingredient, Details } = req.body
        await IngredientModel.findOneAndUpdate({ _id: id }, { Ingredient, Details }).then((result) => {
            res.status(200).json({ message: CommonMessage.updateIngredient.success, success: true, Ingredients: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.updateIngredient.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.getallIngredient = expressAsyncHandler(async (req, res) => {
    try {
        const { search } = req.query
        let limit = req.query.limit ? Number(req.query.limit) : 10
        let page = req.query.page ? Number(req.query.page) : 1

        let skip = limit * (page - 1)
        let totalPage = Math.ceil(await IngredientModel.countDocuments({ Ingredient: new RegExp(search, 'i') }) / limit)

        await IngredientModel.find({ Ingredient: new RegExp(search, 'i') }).skip(skip).limit(limit).then((result) => {
            res.status(200).json({ message: result.count != 0 ? CommonMessage.getallIngredient.success : CommonMessage.getallIngredient.noIngredient, success: true, Ingredients: result, pagination: { limit, page, totalPage } })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.getallIngredient.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.toggleIngredient = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        let IngredientDetails = await IngredientModel.findById(id)

        if (!IngredientDetails) {
            res.status(200).json({ message: CommonMessage.toggleIngredient.notfound, success: false })
        }

        await IngredientModel.findByIdAndUpdate(id, { isActive: !IngredientDetails.isActive }, { new: true }).then((result) => {
            res.status(200).json({ message: result.isActive ? CommonMessage.toggleIngredient.active : CommonMessage.toggleIngredient.deactive, success: true, Ingredients: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.toggleIngredient.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.deleteIngredient = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        await IngredientModel.findByIdAndDelete(id).then(() => {
            res.status(200).json({ message: CommonMessage.deleteIngredient.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.deleteIngredient.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})