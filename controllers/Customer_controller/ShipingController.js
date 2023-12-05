const CommonMessage = require('../../helpers/CommonMessage');
const ShippSchema = require('../../models/Customer/ShippingModel');
const expressAsyncHandler = require('express-async-handler');

const Add_Shiping = expressAsyncHandler(async (req, res) => {
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

    await ShippSchema.create({
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
          message: CommonMessage.saveShipaddress.success,
          success: true,
          ship_address: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.saveShipaddress.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

const Update_Shiping = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
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
    await ShippSchema.findOneAndUpdate(
      { _id: id },
      {
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
      }
    )
      .then((responce) => {
        res.status(200).json({
          message: CommonMessage.updateShipaddress.success,
          success: true,
          ship_address: responce,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.updateShipaddress.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

module.exports = {
  Add_Shiping,
  Update_Shiping,
};
