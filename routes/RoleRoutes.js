const RoleRouter = require('express').Router()

const { addpermission } = require('../controllers/RoleController')
const validate = require('../helpers/Validation')
const { superadmincheck } = require('../middleware')
const { addpermissionvalidation } = require('../validation/RoleValidation')


RoleRouter.route('/add-permission').post(superadmincheck, [addpermissionvalidation, validate], addpermission)

module.exports = RoleRouter