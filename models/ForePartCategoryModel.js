const { default: mongoose } = require("mongoose");

const ForePartCategorySchema = new mongoose.Schema({
    ForePartCategory: {
        type: String,
        max: 100
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model('ForePartCategorys', ForePartCategorySchema)