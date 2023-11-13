const Router = require("express").Router();

const { savecolor, updatecolor } = require("../controllers/ColorMasterController");
const { validate } = require('../helpers/CommonMessage')
const { colorvalidation, updatecolorvalidation } = require("../validation/ColorMasterValidation");

Router.route('/add-color').post([colorvalidation, validate], savecolor)
Router.route('/update-color').put([updatecolorvalidation, validate], updatecolor)

module.exports = Router