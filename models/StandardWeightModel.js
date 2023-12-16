const { default: mongoose, mongo } = require("mongoose");

const StandardWeightSchema = new mongoose.Schema(
  {
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
    article_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
    article_name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("StandardWeights", StandardWeightSchema);
