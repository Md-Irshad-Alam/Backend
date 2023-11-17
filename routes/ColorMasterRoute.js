const Router = require("express").Router();

const { savecolor, updatecolor, getallcolor, deletecolor } = require("../controllers/ColorMasterController");
const { validate } = require('../helpers/CommonMessage')
const { colorvalidation, updatecolorvalidation, deletecolorvalidation } = require("../validation/ColorMasterValidation");

Router.route('/add-color').post([colorvalidation, validate], savecolor)
Router.route('/update-color').put([updatecolorvalidation, validate], updatecolor)
Router.route('/get-color').get(getallcolor)
Router.route('/delete-color').delete([deletecolorvalidation, validate], deletecolor)

module.exports = Router