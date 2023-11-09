const { default: mongoose } = require("mongoose");

const groupSchema = new mongoose.Schema({
    group_name: {
        type: Number,
        max: 100
    },
    group_user: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('groups', groupSchema)