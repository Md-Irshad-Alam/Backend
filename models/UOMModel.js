const { default: mongoose } = require("mongoose");

const uomSchema = new mongoose.Schema({
    uom: {
        type: String,
        max: 50
    }
}, { timestamps: true })

module.exports = mongoose.model('uoms', uomSchema)