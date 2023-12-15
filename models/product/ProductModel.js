const { default: mongoose, mongo } = require("mongoose");

const productSchema = new mongoose.Schema({
  article_code: {
    type: Number,
    required: true,
    unique: true,
    default: () => Math.floor(1000 + Math.random() * 9000), // Auto-generate a 4-digit number
  },
  article_name: {
    type: String,
    max: 100,
    required: true,
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ArticleGroupMasterMasters",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AddCategories",
  },
  heel_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "HeelCategorys",
  },
  forepart_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ForePartCategorys",
  },
  UOM: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "uoms",
  },
  hardness: {
    type: String,
    max: 50,
  },
  price: {
    type: Number,
  },
  gstin: {
    type: Number,
  },
  hsn: {
    type: Number,
    max: 20,
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
    ref: "AddCategories",
  },
  tikki_one: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AddCategories",
  },
  tikki_two: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AddCategories",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
