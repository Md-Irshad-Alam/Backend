const { default: mongoose } = require("mongoose");

const permissionschima = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model("permissions", permissionschima)