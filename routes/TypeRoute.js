const Router = require('express').Router()

const { saveType, updateType, deleteType, getallType } = require('../controllers/TypeController')
const validate = require('../helpers/Validate')
const { TypeValidation, updateTypeValidation, deleteTypeValidation } = require('../validation/TypeValidation')

Router.route('/add-Type').post([TypeValidation, validate], saveType)
Router.route('/update-Type/:id').put([updateTypeValidation, validate], updateType)
Router.route('/get-Type').get(getallType)
Router.route('/delete-Type/:id').delete([deleteTypeValidation, validate], deleteType)

module.exports = Router