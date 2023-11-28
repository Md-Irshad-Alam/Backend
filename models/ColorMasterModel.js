const { default: mongoose } = require("mongoose");

const ColorMasterSchema = new mongoose.Schema({
    color: {
        type: String,
        max: 100
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model('ColorMasters', ColorMasterSchema)