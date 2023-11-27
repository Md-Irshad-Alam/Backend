const { default: mongoose, mongo } = require("mongoose");

const ProductCategorySchema = new mongoose.Schema({

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    color: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'color'
    },
    Type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type'
    }
}, { timestamps: true })

module.exports = mongoose.model('ProductCategorys', ProductCategorySchema)