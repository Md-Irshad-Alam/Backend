const { default: mongoose } = require("mongoose");

const colormasterSchema = new mongoose.Schema({
    color: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

model.exports = mongoose.model('colormasters', colormasterSchema)