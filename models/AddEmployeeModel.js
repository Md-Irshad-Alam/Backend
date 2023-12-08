const { default: mongoose } = require("mongoose");

const AddEmployee = new mongoose.Schema({
    Employee_Name: {
        type: String,
        required: true
        },
    Card_No: {
        type: String,
        required: true,
        unique: true
    },
    Designation: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model('AddEmployees', AddEmployee)