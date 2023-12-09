const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");

const ProductCategoryModel = require("../models/ProductCategoryModel");
const { Types } = require("mongoose");

exports.saveProductCategory = expressAsyncHandler(async (req, res) => {
  try {
    const { article_code,article_name, type_id } = req.body;
    await ProductCategoryModel.create({
      color_id: new Types.ObjectId(color_id),
      category_id: new Types.ObjectId(category_id),
      type_id: new Types.ObjectId(type_id),
    })
      .then(() => {
        res.status(200).json({
          message: CommonMessage.saveProductCategory.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.saveProductCategory.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

// Get all product categories with optional filters
exports.getProductCategories = expressAsyncHandler(async (req, res) => {
  try {
    const { category, color, type } = req.query;
    let query = {};
    if (category) {
      query.category_id = category;
    }
    if (color) {
      query.color_id = color;
    }
    if (type) {
      query.type_id = type;
    }
    await ProductCategoryModel.find(query)
      .populate("category_id")
      .populate("type_id")
      .populate("color_id")
      .then(() => {
        res.status(200).json({
          message: CommonMessage.getallProductCategory.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.getallProductCategory.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

exports.updateProductCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const {category,type,color} = req.body;

    await ProductCategoryModel.findByIdAndUpdate({ _id: id },{category,type,color}, { new: true })
      .populate("category")
      .populate("color")
      .populate("type")

      .then(() => {
        res.status(200).json({
          message: CommonMessage.updateProductCategory.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.updateProductCategory.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



exports.deleteProductCategory = expressAsyncHandler(async (req, res) => {
  try {
      const { id } = req.params
      await ProductCategoryModel.findByIdAndDelete(id).then(() => {
          res.status(200).json({ message: CommonMessage.deleteProductCategory.success, success: true })
      }).catch((error) => {
          res.status(400).json({ message: CommonMessage.deleteProductCategory.failed, success: false, error: error.toString() })
      })
  } catch (error) {
      res.status(500).json(CommonMessage.commonError(error))
  }
})