const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");
const AddCategoryModel = require("../models/AddCategoryModel");

exports.saveAddCategory = expressAsyncHandler(async (req, res) => {
  try {
    const {
      category,
      color,
      type,
      store,
      table,
      Ingredient,
      weight,
      phr,
      rate,
      flyAshRej,
    } = req.body;
    const price = (weight * rate).toFixed(2);
    const subTotal = (parseFloat(weight) + parseFloat(price)).toFixed(2);
    const total = (parseFloat(subTotal) + parseFloat(flyAshRej)).toFixed(2);
    const packagePrice = (parseFloat(total) / parseFloat(flyAshRej)).toFixed(2);

    await AddCategoryModel.create({
      category,
      color,
      type,
      store,
      Ingredient,
      weight,
      phr,
      rate,
      flyAshRej,
      price,
      subTotal,
      total,
      packagePrice,
    })
      .then(() => {
        res.status(200).json({
          message: CommonMessage.saveAddCategory.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.saveAddCategory.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.updateAddCategory = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { category } = req.body;

    await AddCategoryModel.findOneAndUpdate(
      { _id: id },
      {
        category,
      }
    )
      .then((result) => {
        res.status(200).json({
          message: CommonMessage.updateAddCategory.success,
          success: true,
          countries: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.updateAddCategory.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.getallAddCategory = expressAsyncHandler(async (req, res) => {
  try {
      const { search } = req.query
      let limit = req.query.limit ? Number(req.query.limit) : 10
      let page = req.query.page ? Number(req.query.page) : 1

      let skip = limit * (page - 1)
      let totalPage = Math.ceil(await AddCategoryModel.countDocuments({ category: new RegExp(search, 'i') }) / limit)

      await AddCategoryModel.find({ category: new RegExp(search, 'i') }).skip(skip).limit(limit).then((result) => {
          res.status(200).json({ message: result.count != 0 ? CommonMessage.getallAddCategory.success : CommonMessage.getallAddCategory.noAddCategory, success: true, AddCategorys: result, pagination: { limit, page, totalPage } })
      }).catch((error) => {
          res.status(400).json({ message: CommonMessage.getallAddCategory.failed, success: false, error: error.toString() })
      })
  } catch (error) {
      res.status(500).json(CommonMessage.commonError(error))
  }
})

























exports.deleteAddCategory = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    await AddCategoryModel.findByIdAndDelete(id)
      .then(() => {
        res.status(200).json({
          message: CommonMessage.deleteAddCategory.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.deleteAddCategory.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});
