const expressAsyncHandler = require('express-async-handler');
const CommonMessage = require('../helpers/CommonMessage');
const stateMasterModel = require('../models/stateMasterModel.js');

exports.savestateMaster = expressAsyncHandler(async (req, res) => {
  try {
    const { state, country, isActive } = req.body;
    await stateMasterModel
      .create({ state, country, isActive })
      .then(() => {
        res.status(200).json({
          message: CommonMessage.savestateMaster.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.savestateMaster.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.updatestateMaster = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { state, country } = req.body;

    await stateMasterModel
      .findOneAndUpdate({ _id: id }, { state, country })
      .then((result) => {
        res.status(200).json({
          message: CommonMessage.updatestateMaster.success,
          success: true,
          countries: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.updatestateMaster.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.getallstateMaster = expressAsyncHandler(async (req, res) => {
  try {
    const { search } = req.query;
    let limit = req.query.limit ? Number(req.query.limit) : 10;
    let page = req.query.page ? Number(req.query.page) : 1;

    let skip = limit * (page - 1);
    let totalPage = Math.ceil(
      (await stateMasterModel.countDocuments({
        state: new RegExp(search, 'i'),
      })) / limit
    );

    await stateMasterModel
      .find({ state: new RegExp(search, 'i') })
      .skip(skip)
      .limit(limit)
      .then((result) => {
        res.status(200).json({
          message:
            result.count != 0
              ? CommonMessage.getallstateMaster.success
              : CommonMessage.getallstateMaster.nostateMaster,
          success: true,
          countries: result,
          pagination: { limit, page, totalPage },
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.getallstateMaster.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.togglestateMaster = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    let stateMasterdetails = await stateMasterModel.findById(id);

    if (!stateMasterdetails) {
      res.status(200).json({
        message: CommonMessage.togglestateMaster.notfound,
        success: false,
      });
    }

    await stateMasterModel
      .findByIdAndUpdate(
        id,
        { isActive: !stateMasterdetails.isActive },
        { new: true }
      )
      .then((result) => {
        res.status(200).json({
          message: result.isActive
            ? CommonMessage.togglestateMaster.active
            : CommonMessage.togglestateMaster.deactive,
          success: true,
          countries: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.togglestateMaster.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.deletestateMaster = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    await stateMasterModel
      .findByIdAndDelete(id)
      .then(() => {
        res.status(200).json({
          message: CommonMessage.deletestateMaster.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.deletestateMaster.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});
