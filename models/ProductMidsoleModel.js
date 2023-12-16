const { default: mongoose, mongo } = require("mongoose");

const ProductMidsolechema = new mongoose.Schema(
  {
    article_code: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
    article_details: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
    qty: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductMidsole", ProductMidsolechema);
