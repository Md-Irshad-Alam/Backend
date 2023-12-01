const { default: mongoose } = require("mongoose");

const AddCategory = new mongoose.Schema(
  {
    Category_name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    store_name: {
      type: String,
      required: true,
    },
    Ingredient: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
    },
    phr: {
      type: Number,
    },
    rate: {
      type: Number,
    },
    fly_ash_rej:{
      type :Number
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AddCategorys", AddCategory);
