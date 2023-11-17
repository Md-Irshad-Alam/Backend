const { default: mongoose } = require("mongoose");

const countrySchema = new mongoose.Schema({
    country_code: {
        type: String
    },
    country: {
        type: String,
        max: 150
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model('countries', countrySchema)