const { default: mongoose } = require("mongoose");

const EmployeeCategorySchema = new mongoose.Schema({
    EmployeeCategory: {
        type: String,
        max: 100
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model('EmployeeCategorys', EmployeeCategorySchema)