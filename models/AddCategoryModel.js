const { default: mongoose } = require("mongoose");

const AddCategory = new mongoose.Schema(
  {
    category: {
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
    store: {
      type: String,
      required: true,
    },
  
        Ingredient: {
          type: String,
          required: true,
        },
        weight: {
          type: Number,
          required: true,
          min: 0,
          max: 999999.999,
          scale:3
        },
        phr: {
          type: Number,
          required: true,
          min: 0,
          max: 99.99,
          scale:2
        },
        rate: {
          type: Number,
          required: true,
          min: 0,
          max: 9999.99,
          scale:2
        },
        price: {
          type: Number,
          required: true,
        },
        subTotal: {
          type: Number,
          required: true,
        },
        flyAshRej: {
          type: Number,
          required: true,
          min: 0,
          max: 9.9999,
          scale:4
        },
        packagePrice: {
          type: Number,
          required: true,
        },
      },
 
  { timestamps: true }
);

module.exports = mongoose.model("AddCategorys", AddCategory);
