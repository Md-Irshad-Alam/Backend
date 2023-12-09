const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");

const ProductModel = require("../models/ProductModel.js");
const { Types } = require("mongoose");

exports.saveProduct = expressAsyncHandler(async (req, res) => {
  try {
    const { article_code,article_name,group,category,heel_category,forepart_category,UOM,hardness,price,gstin,hsn,remark,type,image,tikki,tikki_one,tikki_two,logo_r,logo_l,outsole,midsole,bottom,side_wall,heel,fore,sidewall_color,remarks
logo_r,logo_l,outsole,midsole,bottom,side_wall,heel,fore,sidewall_color,remarks,size,outSize,rate,mould,outsole_wt,sidewall_wt,bottom_wt,logo_l_wt,logo_r_wt,sidewall_logo_wt,group_id,wl_22_1,manufactured,target,dummy_moulds,store } = req.body;
    





await ProductModel.create({
   
    })
      .then(() => {
        res.status(200).json({
          message: CommonMessage.saveProduct.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.saveProduct.failed,
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
    await ProductModel.find(query)
      .populate("category_id")
      .populate("type_id")
      .populate("color_id")
      .populate("article_code")
      .then(() => {
        res.status(200).json({
          message: CommonMessage.getallProduct.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.getallProduct.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, type, color,article_code } = req.body;

    await ProductModel.findByIdAndUpdate(
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
          message: CommonMessage.updateProduct.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.updateProduct.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteProduct = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    await ProductModel.findByIdAndDelete(id)
      .then(() => {
        res
          .status(200)
          .json({
            message: CommonMessage.deleteProduct.success,
            success: true,
          });
      })
      .catch((error) => {
        res
          .status(400)
          .json({
            message: CommonMessage.deleteProduct.failed,
            success: false,
            error: error.toString(),
          });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});
