const subcategories = require('./Subcategory')

const CategorySchema = mongoose.Schema({
    name: {
        type: String, required: true
    },
    icon: {
        type: String, required: false
    },
    status: {
        type: Number, default: 0
    },
    created : {
        type : Date,
        default: Date.now()
    },
    subcategories: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory" // this name should be same as the model name specified while declaring model
    }
});