const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");
const EmployeeCategoryModel = require("../models/EmployeeCategoryModel");

exports.saveEmployeeCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { EmployeeCategory, isActive } = req.body

        await EmployeeCategoryModel.create({ EmployeeCategory, isActive }).then(() => {
            res.status(200).json({ message: CommonMessage.saveEmployeeCategory.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.saveEmployeeCategory.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.updateEmployeeCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const { EmployeeCategory } = req.body

        await EmployeeCategoryModel.findOneAndUpdate({ _id: id }, { EmployeeCategory }).then((result) => {
            res.status(200).json({ message: CommonMessage.updateEmployeeCategory.success, success: true, EmployeeCategorys: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.updateEmployeeCategory.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.getallEmployeeCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { search } = req.query
        let limit = req.query.limit ? Number(req.query.limit) : 10
        let page = req.query.page ? Number(req.query.page) : 1

        let skip = limit * (page - 1)
        let totalPage = Math.ceil(await EmployeeCategoryModel.countDocuments({ EmployeeCategory: new RegExp(search, 'i') }) / limit)

        await EmployeeCategoryModel.find({ EmployeeCategory: new RegExp(search, 'i') }).skip(skip).limit(limit).then((result) => {
            res.status(200).json({ message: result.count != 0 ? CommonMessage.getallEmployeeCategory.success : CommonMessage.getallEmployeeCategory.noEmployeeCategory, success: true, EmployeeCategorys: result, pagination: { limit, page, totalPage } })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.getallEmployeeCategory.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.toggleEmployeeCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        
        let EmployeeCategorydetails = await EmployeeCategoryModel.findById(id)

        if (!EmployeeCategorydetails) {
            res.status(200).json({ message: CommonMessage.toggleEmployeeCategory.notfound, success: false })
        }

        await EmployeeCategoryModel.findByIdAndUpdate(id, { isActive: !EmployeeCategorydetails.isActive }, { new: true }).then((result) => {
            res.status(200).json({ message: result.isActive ? CommonMessage.toggleEmployeeCategory.active : CommonMessage.toggleEmployeeCategory.deactive, success: true, EmployeeCategorys: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.toggleEmployeeCategory.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.deleteEmployeeCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        await EmployeeCategoryModel.findByIdAndDelete(id).then(() => {
            res.status(200).json({ message: CommonMessage.deleteEmployeeCategory.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.deleteEmployeeCategory.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})