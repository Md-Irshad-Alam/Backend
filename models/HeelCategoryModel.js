const { default: mongoose } = require("mongoose");

const heelCategorySchema = new mongoose.Schema({

}, { timestamps: true })

module.exports = mongoose.model('heelcategory', heelCategorySchema)