const Router = require('express').Router()

const { saveAddEmployee, updateAddEmployee, deleteAddEmployee, getallAddEmployee } = require('../controllers/AddEmployeeController.js')
const validate  = require('../helpers/Validate')
const { AddEmployeevalidation, updateAddEmployeevalidation, deleteAddEmployeevalidation } = require('../validation/AddEmployeeValidation.js')


Router.route('/add-AddEmployee').post([AddEmployeevalidation, validate], saveAddEmployee)
Router.route('/update-AddEmployee/:id').put([updateAddEmployeevalidation, validate], updateAddEmployee)
Router.route('/get-AddEmployee').get(getallAddEmployee)
Router.route('/delete-AddEmployee/:id').delete([deleteAddEmployeevalidation, validate], deleteAddEmployee)

module.exports = Router