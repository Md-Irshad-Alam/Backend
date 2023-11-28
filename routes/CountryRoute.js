const Router = require('express').Router()

const { saveCountry, updateCountry, deleteCountry, getallCountry } = require('../controllers/CountryController')
const validate  = require('../helpers/Validate')
const { countryvalidation, updatecountryvalidation, deletecountryvalidation } = require('../validation/CountryValidation')


Router.route('/add-country').post([countryvalidation, validate], saveCountry)
Router.route('/update-country/:id').put([updatecountryvalidation, validate], updateCountry)
Router.route('/get-country').get(getallCountry)
Router.route('/delete-country/:id').delete([deletecountryvalidation, validate], deleteCountry)

module.exports = Router