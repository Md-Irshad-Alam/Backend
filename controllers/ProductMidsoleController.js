const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");

const ProductMidsoleModel = require("../models/ProductMidsoleModel.js");
const { Types } = require("mongoose");

exports.saveProductMidsole = expressAsyncHandler(async (req, res) => {
  try {
    const {article_code,article,article_details,qty } = req.body;
    await ProductMidsoleModel.create({
      article_code: new Types.ObjectId(article_code),
      article: new Types.ObjectId(article),
      article_details: new Types.ObjectId(article_details),
    })
      .then(() => {
        res.status(200).json({
          message: CommonMessage.saveProductMidsole.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.saveProductMidsole.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

// Get all product categories with optional filters
exports.getallProductMidsole  = expressAsyncHandler(async (req, res) => {
  try {
    const { search } = req.query
    let limit = req.query.limit ? Number(req.query.limit) : 10;
    let page = req.query.page ? Number(req.query.page) : 1;
    let skip = limit * (page - 1);
    let totalPage = Math.ceil((await ProductMidsoleModel.countDocuments({ ProductMidsoles : new RegExp(search, 'i') })) / limit);
    await ProductMidsoleModel
      .find({ ProductMidsoles : new RegExp(search, 'i') })
      .skip(skip)
      .limit(limit)
      .populate("category")
      .populate("article_details")
      .then((result) => {
        res.status(200).json({
          message:
            result.length !== 0
              ? CommonMessage.getallProductMidsole.success
              : CommonMessage.getallProductMidsole.noProduct,
          success: true,
          ProductMidsoles: result,
          pagination: { limit, page, totalPage },
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.getallProductMidsole.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {}
});

exports.updateProductMidsole = async (req, res) => {
  try {
    const { id } = req.params;
    const {article,article_code,article_details} = req.body;

    await ProductMidsoleModel.findByIdAndUpdate({ _id: id },{article,article_code,article_details}, { new: true })
      .populate("article")
      .populate("article_code")
      .populate("article_details")

      .then(() => {
        res.status(200).json({
          message: CommonMessage.updateProductMidsole.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.updateProductMidsole.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



exports.deleteProductMidsole = expressAsyncHandler(async (req, res) => {
  try {
      const { id } = req.params
      await ProductMidsoleModel.findByIdAndDelete(id).then(() => {
          res.status(200).json({ message: CommonMessage.deleteProductMidsole.success, success: true })
      }).catch((error) => {
          res.status(400).json({ message: CommonMessage.deleteProductMidsole.failed, success: false, error: error.toString() })
      })
  } catch (error) {
      res.status(500).json(CommonMessage.commonError(error))
  }
})