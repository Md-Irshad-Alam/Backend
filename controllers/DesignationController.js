const expressAsyncHandler = require('express-async-handler');
const CommonMessage = require('../helpers/CommonMessage');
const DesignationModel = require('../models/DesignationModel');

exports.saveDesignation = expressAsyncHandler(async (req, res) => {
  try {
    const { designation, isActive } = req.body;

    await DesignationModel.create({ designation, isActive })
      .then(() => {
        res
          .status(200)
          .json({
            message: CommonMessage.savedesignation.success,
            success: true,
          });
      })
      .catch((error) => {
        res
          .status(400)
          .json({
            message: CommonMessage.savedesignation.failed,
            success: false,
            error: error.toString(),
          });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.updateDesignation = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { designation } = req.body;

    await DesignationModel.findOneAndUpdate({ _id: id }, { designation })
      .then((result) => {
        res
          .status(200)
          .json({
            message: CommonMessage.updatedesignation.success,
            success: true,
            designations: result,
          });
      })
      .catch((error) => {
        res
          .status(400)
          .json({
            message: CommonMessage.updatedesignation.failed,
            success: false,
            error: error.toString(),
          });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.getallDesignation = expressAsyncHandler(async (req, res) => {
  try {
    const { search } = req.query;
    let limit = req.query.limit ? Number(req.query.limit) : 10;
    let page = req.query.page ? Number(req.query.page) : 1;

    let skip = limit * (page - 1);
    let totalPage = Math.ceil(
      (await DesignationModel.countDocuments({
        designation: new RegExp(search, 'i'),
      })) / limit
    );

    await DesignationModel.find({ designation: new RegExp(search, 'i') })
      .skip(skip)
      .limit(limit)
      .then((result) => {
        res
          .status(200)
          .json({
            message:
              result.count != 0
                ? CommonMessage.getalldesignation.success
                : CommonMessage.getalldesignation.nodesignation,
            success: true,
            designations: result,
            pagination: { limit, page, totalPage },
          });
      })
      .catch((error) => {
        res
          .status(400)
          .json({
            message: CommonMessage.getalldesignation.failed,
            success: false,
            error: error.toString(),
          });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.toggleDesignation = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    let designationdetails = await DesignationModel.findById(id);

    if (!designationdetails) {
      res
        .status(200)
        .json({
          message: CommonMessage.toggleDesignation.notfound,
          success: false,
        });
    }

    await DesignationModel.findByIdAndUpdate(
      id,
      { isActive: !designationdetails.isActive },
      { new: true }
    )
      .then((result) => {
        res
          .status(200)
          .json({
            message: result.isActive
              ? CommonMessage.toggledesignation.active
              : CommonMessage.toggledesignation.deactive,
            success: true,
            designations: result,
          });
      })
      .catch((error) => {
        res
          .status(400)
          .json({
            message: CommonMessage.toggledesignation.failed,
            success: false,
            error: error.toString(),
          });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.deleteDesignation = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    await DesignationModel.findByIdAndDelete(id)
      .then(() => {
        res
          .status(200)
          .json({
            message: CommonMessage.deletedesignation.success,
            success: true,
          });
      })
      .catch((error) => {
        res
          .status(400)
          .json({
            message: CommonMessage.deletedesignation.failed,
            success: false,
            error: error.toString(),
          });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});
