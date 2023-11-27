const { default: mongoose } = require("mongoose");

const TypeSchema = new mongoose.Schema({
    Type: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Types', TypeSchema)