const { default: mongoose } = require("mongoose");

const CurrencySchema = new mongoose.Schema({
    Currency: {
        type: String,
        max: 100
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Currencys', CurrencySchema)