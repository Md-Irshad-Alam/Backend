const expressAsyncHandler = require('express-async-handler');
const CommonMessage = require('../helpers/CommonMessage');
const CurrencyModel = require('../models/CurrencyModel.js');

exports.saveCurrency = expressAsyncHandler(async (req, res) => {
  try {
    const { Currency, Symbol, isActive } = req.body;

    await CurrencyModel.create({ Currency, Symbol, isActive })
      .then(() => {
        res
          .status(200)
          .json({ message: CommonMessage.saveCurrency.success, success: true });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.saveCurrency.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.updateCurrency = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { Currency, Symbol } = req.body;

    await CurrencyModel.findOneAndUpdate({ _id: id }, { Currency, Symbol })
      .then((result) => {
        res.status(200).json({
          message: CommonMessage.updateCurrency.success,
          success: true,
          countries: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.updateCurrency.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.getallCurrency = expressAsyncHandler(async (req, res) => {
  try {
    const { search } = req.query;
    let limit = req.query.limit ? Number(req.query.limit) : 10;
    let page = req.query.page ? Number(req.query.page) : 1;

    let skip = limit * (page - 1);
    let totalPage = Math.ceil(
      (await CurrencyModel.countDocuments({
        Currency: new RegExp(search, 'i'),
      })) / limit
    );

    await CurrencyModel.find({ Currency: new RegExp(search, 'i') })
      .skip(skip)
      .limit(limit)
      .then((result) => {
        res.status(200).json({
          message:
            result.count != 0
              ? CommonMessage.getallCurrency.success
              : CommonMessage.getallCurrency.noCurrency,
          success: true,
          countries: result,
          pagination: { limit, page, totalPage },
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.getallCurrency.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.toggleCurrency = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    let Currencydetails = await CurrencyModel.findById(id);

    if (!Currencydetails) {
      res.status(200).json({
        message: CommonMessage.toggleCurrency.notfound,
        success: false,
      });
    }

    await CurrencyModel.findByIdAndUpdate(
      id,
      { isActive: !Currencydetails.isActive },
      { new: true }
    )
      .then((result) => {
        res.status(200).json({
          message: result.isActive
            ? CommonMessage.toggleCurrency.active
            : CommonMessage.toggleCurrency.deactive,
          success: true,
          countries: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.toggleCurrency.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.deleteCurrency = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    await CurrencyModel.findByIdAndDelete(id)
      .then(() => {
        res.status(200).json({
          message: CommonMessage.deleteCurrency.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.deleteCurrency.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});
