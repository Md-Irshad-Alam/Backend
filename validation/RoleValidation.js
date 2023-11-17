const { body } = require("express-validator");
const PermissionModel = require("../models/PermissionModel");

exports.addpermissionvalidation = [
    body("permission_name").notEmpty().withMessage("Provide permission name").isString().withMessage("Provide permission name").isUppercase().withMessage("Permission name must be lower case").custom(async (value) => {
        await PermissionModel.findOne({ name: value.tolowercase() }).then((result) => {
            if (result) {
                throw new Error("This permission is already exsist")
            }
        })
    })
]