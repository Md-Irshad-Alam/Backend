const Router = require('express').Router()

const {getallStandardWeight,saveStandardWeight,updateStandardWeight,deleteStandardWeight } = require('../controllers/StandardWeightController.js')
const validate = require('../helpers/Validate')

const { StandardWeightValidation, updateStandardWeightValidation, deleteStandardWeightValidation } = require('../validation/StandardWeightValidation.js')

Router.route('/add-StandardWeight').post([StandardWeightValidation, validate],saveStandardWeight)
Router.route('/update-StandardWeight/:id').put([updateStandardWeightValidation, validate],updateStandardWeight)
Router.route('/get-StandardWeight').get(getallStandardWeight)
Router.route('/delete-StandardWeight/:id').delete([deleteStandardWeightValidation, validate], deleteStandardWeight)

module.exports = Router;