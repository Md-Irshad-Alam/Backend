const { default: mongoose, mongo } = require("mongoose");
const ProductlistSchema = new mongoose.Schema(
  {
    article_code: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },  
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

module.exports = mongoose.model("Productlists", ProductlistSchema);
