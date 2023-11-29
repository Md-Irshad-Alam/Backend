const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");
const AddEmployeeModel = require("../models/AddEmployeeModel");

exports.saveAddEmployee = expressAsyncHandler(async (req, res) => {
    try {
        const { Employee_Name,Card_No,Designation,Category, isActive } = req.body
      
        await AddEmployeeModel.create({ Employee_Name,Card_No,Designation,Category, isActive }).then(() => {
            res.status(200).json({ message: CommonMessage.saveAddEmployee.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.saveAddEmployee.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.updateAddEmployee = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const { Employee_Name,Card_No,Designation,Category } = req.body

        await AddEmployeeModel.findOneAndUpdate({ _id: id }, { Employee_Name,Card_No,Designation,Category }).then((result) => {
            res.status(200).json({ message: CommonMessage.updateAddEmployee.success, success: true, countries: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.updateAddEmployee.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.getallAddEmployee = expressAsyncHandler(async (req, res) => {
    try {
        const { search } = req.query
        let limit = req.query.limit ? Number(req.query.limit) : 10
        let page = req.query.page ? Number(req.query.page) : 1

        let skip = limit * (page - 1)
        let totalPage = Math.ceil(await AddEmployeeModel.countDocuments({ Employee_Name,Card_No,Designation,Category: new RegExp(search, 'i') }) / limit)

        await AddEmployeeModel.find({ Employee_Name,Card_No,Designation,Category: new RegExp(search, 'i') }).skip(skip).limit(limit).then((result) => {
            res.status(200).json({ message: result.count != 0 ? CommonMessage.getallAddEmployee.success : CommonMessage.getallAddEmployee.noAddEmployee, success: true, countries: result, pagination: { limit, page, totalPage } })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.getallAddEmployee.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.toggleAddEmployee = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        let AddEmployeedetails = await AddEmployeeModel.findById(id)

        if (!AddEmployeedetails) {
            res.status(200).json({ message: CommonMessage.toggleAddEmployee.notfound, success: false })
        }

        await AddEmployeeModel.findByIdAndUpdate(id, { isActive: !AddEmployeedetails.isActive }, { new: true }).then((result) => {
            res.status(200).json({ message: result.isActive ? CommonMessage.toggleAddEmployee.active : CommonMessage.toggleAddEmployee.deactive, success: true, countries: result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.toggleAddEmployee.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

exports.deleteAddEmployee = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        await AddEmployeeModel.findByIdAndDelete(id).then(() => {
            res.status(200).json({ message: CommonMessage.deleteAddEmployee.success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.deleteAddEmployee.failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})