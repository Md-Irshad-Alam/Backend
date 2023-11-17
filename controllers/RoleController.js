const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");
const PermissionModel = require("../models/PermissionModel");
const RoleModel = require("../models/RoleModel");

exports.addpermission = expressAsyncHandler(async (req, res) => {
    try {

        const { permission_name } = req.body

        await PermissionModel.create({ name: permission_name }).then((result) => {
            RoleModel.findByIdAndUpdate("65521f7369dc80908b25f784", { $push: { permissions: result._id } }, { new: true }).then(() => {
                res.status(200).json({ message: CommonMessage.addpermission.success, success: true, permission: result })
            })
        }).catch((error) => {
            res.status(200).json({ message: CommonMessage.addpermission.failed, success: false, error: error.toString() })
        })

    } catch (error) {
        res.status(400).json(CommonMessage.commonError(error))
    }
})

exports.updatepermission = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const { permission_name } = req.body

        await PermissionModel.findByIdAndUpdate(id, { name: permission_name }, { new: true }).then((result) => {
            res.status(200).json({ message: CommonMessage.editpermission.success, success: true, permission: result })
        }).catch((error) => {
            res.status(200).json({ message: CommonMessage.editpermission.failed, success: false, error: error.toString() })
        })

    } catch (error) {
        res.status(400).json(CommonMessage.commonError(error))
    }
})

exports.deletepermission = expressAsyncHandler(async (req, res) => {
    try {

        const { id } = req.params

        await PermissionModel.findByIdAndDelete(id).then((result) => {
            RoleModel.findByIdAndUpdate("65521f7369dc80908b25f784", { $pull: { permissions: id } }, { new: true }).then(() => {
                res.status(200).json({ message: CommonMessage.removepermission.success, success: true, permission: result })
            })
        }).catch((error) => {
            res.status(200).json({ message: CommonMessage.removepermission.failed, success: false, error: error.toString() })
        })

    } catch (error) {
        res.status(400).json(CommonMessage.commonError(error))
    }
})

exports.tooglepermission = expressAsyncHandler(async (req, res) => {
    try {

        const { id } = req.params

        let permissiondetails = await PermissionModel.findById(id)

        await PermissionModel.findByIdAndUpdate(id, { isActive: !permissiondetails.isActive }, { new: true }).then((result) => {
            res.status(200).json({ message: result.isActive ? CommonMessage.toogleprmission.active : CommonMessage.toogleprmission.deactive, success: true, permission: result })
        }).catch((error) => {
            res.status(200).json({ message: CommonMessage.toogleprmission.failed, success: false, error: error.toString() })
        })

    } catch (error) {
        res.status(400).json(CommonMessage.commonError(error))
    }
})

// exports.