const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");

const StandardWeightModel = require("../models/StandardWeightModel.js");
const { Types } = require("mongoose");

exports.saveStandardWeight = expressAsyncHandler(async (req, res) => {
  try {
    const { category_id,article_id, article_name } = req.body;
    await StandardWeightModel.create({
      article_id: new Types.ObjectId(article_id),
      category_id: new Types.ObjectId(category_id),
      article_name: new Types.ObjectId(article_name),
    })
      .then(() => {
        res.status(200).json({
          message: CommonMessage.saveStandardWeight.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.saveStandardWeight.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

// Get all product categories with optional filters
exports.getallStandardWeight  = expressAsyncHandler(async (req, res) => {
  try {
    const { search } = req.query
    let limit = req.query.limit ? Number(req.query.limit) : 10;
    let page = req.query.page ? Number(req.query.page) : 1;
    let skip = limit * (page - 1);
    let totalPage = Math.ceil((await StandardWeightModel.countDocuments({ standardweights : new RegExp(search, 'i') })) / limit);
    await StandardWeightModel
      .find({ standardweights : new RegExp(search, 'i') })
      .skip(skip)
      .limit(limit)
      .populate("category")
      .populate("article_name")
      .then((result) => {
        res.status(200).json({
          message:
            result.length !== 0
              ? CommonMessage.getallStandardWeight.success
              : CommonMessage.getallStandardWeight.noProduct,
          success: true,
          standardweights: result,
          pagination: { limit, page, totalPage },
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.getallStandardWeight.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {}
});

exports.updateStandardWeight = async (req, res) => {
  try {
    const { id } = req.params;
    const {category_id,article_id,article_name} = req.body;

    await StandardWeightModel.findByIdAndUpdate({ _id: id },{category_id,article_id,article_name}, { new: true })
      .populate("category_id")
      .populate("article_id")
      .populate("article_name")

      .then(() => {
        res.status(200).json({
          message: CommonMessage.updateStandardWeight.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.updateStandardWeight.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



exports.deleteStandardWeight = expressAsyncHandler(async (req, res) => {
  try {
      const { id } = req.params
      await StandardWeightModel.findByIdAndDelete(id).then(() => {
          res.status(200).json({ message: CommonMessage.deleteStandardWeight.success, success: true })
      }).catch((error) => {
          res.status(400).json({ message: CommonMessage.deleteStandardWeight.failed, success: false, error: error.toString() })
      })
  } catch (error) {
      res.status(500).json(CommonMessage.commonError(error))
  }
})