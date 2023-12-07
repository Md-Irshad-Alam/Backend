const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");

const ProductlistModel = require("../models/ProductlistModel.js");
const { Types } = require("mongoose");

exports.saveProductlist = expressAsyncHandler(async (req, res) => {
  try {
    const { article_code, color_id, category_id, type_id } = req.body;
    await ProductlistModel.create({
      article_code: new Types.ObjectId(article_code),
      color_id: new Types.ObjectId(color_id),
      category_id: new Types.ObjectId(category_id),
      type_id: new Types.ObjectId(type_id),
    })
      .then(() => {
        res.status(200).json({
          message: CommonMessage.saveProductlist.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.saveProductlist.failed,
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
    const { category, color, type, article_code } = req.query;
    let query = {};
    if (article_code) {
      query.article_code = article_code;
    }
    if (category) {
      query.category_id = category;
    }
    if (color) {
      query.color_id = color;
    }
    if (type) {
      query.type_id = type;
    }
    await ProductlistModel.find(query)
      .populate("category_id")
      .populate("type_id")
      .populate("color_id")
      .populate("article_code")
      .then(() => {
        res.status(200).json({
          message: CommonMessage.getallProductlist.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.getallProductlist.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

exports.updateProductlist = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, type, color,article_code } = req.body;

    await ProductlistModel.findByIdAndUpdate(
      { _id: id },
      { category, type, color,article_code },
      { new: true }
    )
      .populate("category")
      .populate("color")
      .populate("type")
      .populate("article_code")

      .then(() => {
        res.status(200).json({
          message: CommonMessage.updateProductlist.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.updateProductlist.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteProductlist = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    await ProductlistModel.findByIdAndDelete(id)
      .then(() => {
        res
          .status(200)
          .json({
            message: CommonMessage.deleteProductlist.success,
            success: true,
          });
      })
      .catch((error) => {
        res
          .status(400)
          .json({
            message: CommonMessage.deleteProductlist.failed,
            success: false,
            error: error.toString(),
          });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});
