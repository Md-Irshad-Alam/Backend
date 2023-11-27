const { default: mongoose } = require("mongoose");

const IngredientSchema = new mongoose.Schema({
    Ingredient: {
        type: String
    },
    Details: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Ingredients', IngredientSchema)