const { default: mongoose, mongo } = require("mongoose")

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    emailverified: {
        isVerified: {
            type: Boolean,
            default: false
        },
        verifyAt: {
            type: Date
        }
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    countrycode: {
        type: String,
        required: true
    },
    mobileverified: {
        isVerified: {
            type: Boolean,
            default: false
        },
        verifyAt: {
            type: Date
        }
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    resetpasswordCode: {
        type: String
    },
    resetpasswordAt: {
        type: String
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "roles"
    }
}, { timestamps: true })

module.exports = mongoose.model('users', userSchema)