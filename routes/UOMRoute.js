const Router = require('express').Router()

const { saveUOM, updateUOM, deleteUOM, getallUOM } = require('../controllers/UOMController')
const validate = require('../helpers/Validate')
const { UOMValidation, updateUOMValidation, deleteUOMValidation } = require('../validation/UOMValidation.js')

Router.route('/add-UOM').post([UOMValidation, validate], saveUOM)
Router.route('/update-UOM/:id').put([updateUOMValidation, validate], updateUOM)
Router.route('/get-UOM').get(getallUOM)
Router.route('/delete-UOM/:id').delete([deleteUOMValidation, validate], deleteUOM)

module.exports = Router