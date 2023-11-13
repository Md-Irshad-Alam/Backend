const { default: mongoose } = require("mongoose");

const roleschima = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    permissions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'permissions'
        }
    ],
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model("roles", roleschima)