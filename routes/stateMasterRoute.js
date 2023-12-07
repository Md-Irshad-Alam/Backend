const Router = require('express').Router()

const { savestateMaster, updatestateMaster, deletestateMaster, getallstateMaster } = require('../controllers/stateMasterController.js')
const validate  = require('../helpers/Validate')
const { stateMastervalidation, updatestateMastervalidation, deletestateMastervalidation } = require('../validation/stateMasterValidation.js')


Router.route('/add-stateMaster').post([stateMastervalidation, validate], savestateMaster)
Router.route('/update-stateMaster/:id').put([updatestateMastervalidation, validate], updatestateMaster)
Router.route('/get-stateMaster').get(getallstateMaster)
Router.route('/delete-stateMaster/:id').delete([deletestateMastervalidation, validate], deletestateMaster)

module.exports = Router