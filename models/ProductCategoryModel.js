const { default: mongoose, mongo } = require("mongoose");

const ProductCategorySchema = new mongoose.Schema(
  {
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AddCategorys",
    },
    color_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ColorMasters",
    },
    type_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Types",
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductCategorys", ProductCategorySchema);
