const Router = require('express').Router()

const { saveStore, updatestore, deletestore, getallstore } = require('../controllers/StoreController')

const validate = require('../helpers/Validate')

const { storevalidation, updatestorevalidation, deletestorevalidation } = require('../validation/StoreValidation')

Router.route('/add-store').post([storevalidation, validate], saveStore)
Router.route('/update-store/:id').put([updatestorevalidation, validate], updatestore)
Router.route('/get-store').get(getallstore)
Router.route('/delete-store/:id').delete([deletestorevalidation, validate], deletestore)

module.exports = Router