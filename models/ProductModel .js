const { default: mongoose, mongo } = require("mongoose");

const productSchema = new mongoose.Schema({
    article_code: {
        type: Number,
        required: true,
        unique: true,
        default: 1
    },
    article_name: {
        type: String,
        max: 100,
        required: true
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'groups'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    heel_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'heelcategory'
    },
    forepart_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'forepartcategory'
    },
    uom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'uoms'
    },
    hardness: {
        type: String,
        max: 50
    },
    price: {
        type: Number,
    },
    gstin: {
        type: Number,
    },
    hsn: {
        type: Number,
        max: 20
    },
    remarks: {
        type: String,
    },
    type: {
        type: String,
    },
    image: {
        type: Array,
    },
    tikki: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    tikki_one: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    tikki_two: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
}, { timestamps: true })

module.exports = mongoose.model('products', productSchema)