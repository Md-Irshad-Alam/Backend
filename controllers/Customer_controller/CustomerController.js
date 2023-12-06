const cutomerAdd = require('../../models/Customer/AddCustomerModel');
const expressAsyncHandler = require('express-async-handler');
const CommonMessage = require('../../helpers/CommonMessage');

const saveCustomer = expressAsyncHandler(async (req, res) => {
  try {
    const {
      initials,
      customer_name,
      company,
      currency,
      customer_code,
      fax,
      contach_person,
      contact_phone,
      contact_mobile,
      ship_address,
      bill_address,
    } = req.body;

    const customer = await cutomerAdd
      .create({
        initials,
        customer_name,
        company,
        currency,
        customer_code,
        fax,
        contach_person,
        contact_phone,
        contact_mobile,
        bill_address,
        ship_address,
      })
      .then((customer) =>
        cutomerAdd
          .findById(customer._id)
          .populate('ship_address')
          .populate('bill_address')
      )
      .then((populatedCustomer) => {
        res.status(200).json({
          message: CommonMessage.savecustomer.success,
          success: true,
          customer: populatedCustomer,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({
          message: CommonMessage.savecustomer.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json(CommonMessage.commonError(error));
  }
});

const updateCustomer = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const {
      initials,
      customer_name,
      company,
      currency,
      customer_code,
      fax,
      contach_person,
      contact_phone,
      contact_mobile,
    } = req.body;
    await cutomerAdd
      .findOneAndUpdate(
        { _id: id },
        {
          initials,
          customer_name,
          company,
          currency,
          customer_code,
          fax,
          contach_person,
          contact_phone,
          contact_mobile,
        }
      )
      .then((responce) => {
        res.status(200).json({
          message: CommonMessage.updatecustomer.success,
          success: true,
          customer: responce,
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
      .find({})
      .skip(skip)
      .limit(limit)
      .populate('ship_address')
      .populate('bill_address')
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
// const GetAllCustomer = expressAsyncHandler(async (req, res) => {
//   const customerDetails = await cutomerAdd
//     .find({})
//     .populate('ship_address')
//     .populate('bill_address');

// });

module.exports = {
  saveCustomer,
  updateCustomer,
  DeleteCustomer,
  GetAllCustomer,
};
