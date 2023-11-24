const cutomerAdd = require('../models/AddCustomerModel');
const expressAsyncHandler = require('express-async-handler');
const CommonMessage = require('../helpers/CommonMessage');
const saveCustomer = expressAsyncHandler(async (req, res) => {
  try {
    const {
      customer_name,
      alias,
      customer_code,
      billDetails,
      shipDetails,
      isActive,
    } = req.body;
    // const { ship_address, district, station, pin, email, mobile, gstin, pan, phone } = billDetails;
    function generateUniqueNumber() {
      const min = 1000000000;
      const max = 9999999999;
      const uniqueNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      return uniqueNumber.toString();
    }
    const uniqueNumber = generateUniqueNumber();
    await cutomerAdd
      .create({
        customer_name,
        alias,
        customer_code: uniqueNumber,
        billDetails,
        shipDetails,
        isActive,
      })
      .then(() => {
        res.status(200).json({
          message: CommonMessage.savecustomer.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.savecustomer.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

const updateCustomer = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const { customer_name, alias, billDetails, shipDetails } = req.body;
    await cutomerAdd
      .findOneAndUpdate(
        { _id: id },
        { customer_name, alias, billDetails, shipDetails }
      )
      .then((responce) => {
        res.status(200).json({
          message: CommonMessage.updatecustomer.success,
          success: true,
          stores: responce,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.updatecustomer.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});
const DeleteCustomer = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    await cutomerAdd
      .findByIdAndDelete(id)
      .then(() => {
        res.status(200).json({
          message: CommonMessage.deleteCustomer.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.deleteCustomer.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});
const GetAllCustomer = expressAsyncHandler(async (req, res) => {
  try {
    let limit = req.query.limit ? Number(req.query.limit) : 10;
    let page = req.query.page ? Number(req.query.page) : 1;
    let skip = limit * (page - 1);
    let totalPage = Math.ceil((await cutomerAdd.countDocuments()) / limit);
    await cutomerAdd
      .find()
      .skip(skip)
      .limit(limit)
      .then((result) => {
        res.status(200).json({
          message:
            result.length !== 0
              ? CommonMessage.getallcustomer.success
              : CommonMessage.getallcustomer.nocustomer,
          success: true,
          customer: result,
          pagination: { limit, page, totalPage },
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.getallcustomer.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {}
});

module.exports = {
  saveCustomer,
  updateCustomer,
  DeleteCustomer,
  GetAllCustomer,
};
