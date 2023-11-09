const { default: mongoose } = require("mongoose");

const storeSchema = new mongoose.Schema({
    store_name: {
        type: String,
        required: true,
        unique: true
    },
    remarks: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model('stores', storeSchema)