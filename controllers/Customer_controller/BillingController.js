const CommonMessage = require('../../helpers/CommonMessage');
const BillSchema = require('../../models/Customer/BillModel');
const expressAsyncHandler = require('express-async-handler');

const Add_Billing = expressAsyncHandler(async (req, res) => {
  try {
    const {
      address,
      country,
      district,
      state,
      station,
      postal_code,
      email,
      mobile,
      gstin,
      tin_no,
      pan,
      phone,
    } = req.body;

    await BillSchema.create({
      address,
      country,
      district,
      state,
      station,
      postal_code,
      email,
      mobile,
      gstin,
      tin_no,
      pan,
      phone,
    })
      .then((result) => {
        res.status(200).json({
          message: CommonMessage.savebilladdress.success,
          success: true,
          bill_details: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.savebilladdress.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

const Update_billing = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const {
      ship_address,
      country,
      district,
      state,
      station,
      postal_code,
      email,
      mobile,
      gstin,
      tin_no,
      pan,
      phone,
    } = req.body;
    await BillSchema.findOneAndUpdate(
      { _id: id },
      {
        ship_address,
        country,
        district,
        state,
        station,
        postal_code,
        email,
        mobile,
        gstin,
        tin_no,
        pan,
        phone,
      }
    )
      .then((responce) => {
        res.status(200).json({
          message: CommonMessage.updateBilladdress.success,
          success: true,
          Ship_address: responce,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.updateBilladdress.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

module.exports = {
  Add_Billing,
  Update_billing,
};
