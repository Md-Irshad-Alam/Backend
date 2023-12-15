const expressAsyncHandler = require('express-async-handler');
const CommonMessage = require('../helpers/CommonMessage');
const AddEmployeeModel = require('../models/AddEmployeeModel');

exports.saveAddEmployee = expressAsyncHandler(async (req, res) => {
  try {
    const { Employee_Name, Card_No, Designation, Category, isActive } =
      req.body;

    await AddEmployeeModel.create({
      Employee_Name,
      Card_No,
      Designation,
      Category,
      isActive,
    })
      .then(() => {
        res.status(200).json({
          message: CommonMessage.saveAddEmployee.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.saveAddEmployee.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.updateAddEmployee = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { Employee_Name, Card_No, Designation, Category } = req.body;

    await AddEmployeeModel.findOneAndUpdate(
      { _id: id },
      { Employee_Name, Card_No, Designation, Category }
    )
      .then((result) => {
        res.status(200).json({
          message: CommonMessage.updateAddEmployee.success,
          success: true,
          countries: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.updateAddEmployee.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.getallAddEmployee = expressAsyncHandler(async (req, res) => {
  try {
    const { search } = req.query;
    await AddEmployeeModel.find({ Category: new RegExp(search, 'i') })

      .then((result) => {
        res.status(200).json({
          message:
            result.count != 0
              ? CommonMessage.getallAddEmployee.success
              : CommonMessage.getallAddEmployee.noAddEmployee,
          success: true,
          countries: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.getallAddEmployee.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.toggleAddEmployee = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    let AddEmployeedetails = await AddEmployeeModel.findById(id);

    if (!AddEmployeedetails) {
      res.status(200).json({
        message: CommonMessage.toggleAddEmployee.notfound,
        success: false,
      });
    }

    await AddEmployeeModel.findByIdAndUpdate(
      id,
      { isActive: !AddEmployeedetails.isActive },
      { new: true }
    )
      .then((result) => {
        res.status(200).json({
          message: result.isActive
            ? CommonMessage.toggleAddEmployee.active
            : CommonMessage.toggleAddEmployee.deactive,
          success: true,
          countries: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.toggleAddEmployee.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.deleteAddEmployee = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    await AddEmployeeModel.findByIdAndDelete(id)
      .then(() => {
        res.status(200).json({
          message: CommonMessage.deleteAddEmployee.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.deleteAddEmployee.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});
