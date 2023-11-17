const { default: mongoose } = require("mongoose");

const designationSchema = new mongoose.Schema({
    designation: {
        type: String,
        max: 100
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model('designations', designationSchema)