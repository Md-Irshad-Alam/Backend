const expressAsyncHandler = require('express-async-handler');
const CommonMessage = require('../helpers/CommonMessage');
const CountryModel = require('../models/CountryModel.js');

exports.saveCountry = expressAsyncHandler(async (req, res) => {
  try {
    const { country, isActive } = req.body;

    await CountryModel.create({ country, isActive })
      .then((result) => {
        res.status(200).json({
          message: CommonMessage.savecountry.success,
          success: true,
          country: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.savecountry.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.updateCountry = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { country } = req.body;

    await CountryModel.findOneAndUpdate({ _id: id }, { country })
      .then((result) => {
        res.status(200).json({
          message: CommonMessage.updatecountry.success,
          success: true,
          countries: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.updatecountry.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.getallCountry = expressAsyncHandler(async (req, res) => {
  try {
    const { search } = req.query;
    let limit = req.query.limit ? Number(req.query.limit) : 10;
    let page = req.query.page ? Number(req.query.page) : 1;

    let skip = limit * (page - 1);
    let totalPage = Math.ceil(
      (await CountryModel.countDocuments({
        country: new RegExp(search, 'i'),
      })) / limit
    );

    await CountryModel.find({ country: new RegExp(search, 'i') })
      .skip(skip)
      .limit(limit)
      .then((result) => {
        res.status(200).json({
          message:
            result.count != 0
              ? CommonMessage.getallcountry.success
              : CommonMessage.getallcountry.nocountry,
          success: true,
          countries: result,
          pagination: { limit, page, totalPage },
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.getallcountry.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.toggleCountry = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    let countrydetails = await CountryModel.findById(id);

    if (!countrydetails) {
      res.status(200).json({
        message: CommonMessage.togglecountry.notfound,
        success: false,
      });
    }

    await CountryModel.findByIdAndUpdate(
      id,
      { isActive: !countrydetails.isActive },
      { new: true }
    )
      .then((result) => {
        res.status(200).json({
          message: result.isActive
            ? CommonMessage.togglecountry.active
            : CommonMessage.togglecountry.deactive,
          success: true,
          countries: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.togglecountry.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.deleteCountry = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    await CountryModel.findByIdAndDelete(id)
      .then(() => {
        res.status(200).json({
          message: CommonMessage.deletecountry.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.deletecountry.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});
