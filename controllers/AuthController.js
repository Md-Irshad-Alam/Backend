const expressAsyncHandler = require('express-async-handler');
const CommonMessage = require('../helpers/CommonMessage');
const {
  compairpassword,
  encryptpassword,
  tokens,
} = require('../helpers/AuthHelper');
const otpGenerator = require('otp-generator');
const moment = require('moment-timezone');
const AuthModel = require('../models/AuthModel');
const TokenModel = require('../models/TokenModel');
const nodemailer = require('nodemailer');

exports.register = expressAsyncHandler(async (req, res) => {
  try {
    const { fname, lname, email, password, mobile } = req.body;
    await AuthModel.create({
      fname,
      lname,
      email,
      mobile,
      password: await encryptpassword(password),
    })
      .then(() => {
        res
          .status(200)
          .json({ message: CommonMessage.registerUser.success, success: true });
      })
      .catch((error) => {
        res.status(500).json({
          message: CommonMessage.registerUser.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.login = expressAsyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    await AuthModel.findOne({ email })
      .then(async (result) => {
        if (result) {
          if (await compairpassword(password, result.password)) {
            if (result.isActive) {
              res.status(200).json({
                message: CommonMessage.loginUser.success,
                success: true,
                user: result,
                token: await tokens(result._id),
              });
            } else {
              res.status(200).json({
                message: CommonMessage.loginUser.notactive,
                success: false,
              });
            }
          } else {
            res
              .status(400)
              .json({ message: CommonMessage.loginUser.wrong, success: false });
          }
        } else {
          res.status(400).json({
            message: CommonMessage.loginUser.exist,
            success: false,
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: CommonMessage.loginUser.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'germaine19@ethereal.email',
    pass: 'pMuGrE5CxZMnZ6AjAs',
  },
});

exports.forgetPassword = expressAsyncHandler(async (req, res) => {
  try {
    const { email } = req.body;
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    const result = await AuthModel.findOneAndUpdate(
      { email },
      { resetpasswordCode: otp, resetpasswordAt: moment().utc().format() },
      { new: true }
    );

    await transporter.sendMail({
      to: email,
      subject: 'Password Reset OTP',
      text: `Your OTP for password reset is: ${otp}`,
    });
    res.status(200).json({
      message: CommonMessage.forgetPassword.success,
      success: true,
      code: result.resetpasswordCode,
    });
  } catch (error) {
    res.status(500).json({
      message: CommonMessage.forgetPassword.failed,
      success: false,
      error: error.toString(),
    });
  }
});

exports.Getusers = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.user;
    const userdetails = await AuthModel.findById(id);
    res.status(200).send({ data: userdetails, message: 'User fatched ' });
    return userdetails;
  } catch (error) {
    res.status(400).send({ message: 'User fatching faild !' });
  }
});
exports.verifyOtp = expressAsyncHandler(async (req, res) => {
  try {
    const { email, otp } = req.body;
    const AuthModeldetails = await AuthModel.findOne({
      email,
      resetpasswordCode: otp,
    });

    if (AuthModeldetails) {
      return res
        .status(200)
        .json({ message: CommonMessage.verifyOtp.success, success: true });
    }

    res
      .status(200)
      .json({ message: CommonMessage.verifyOtp.failed, success: false });
  } catch (error) {
    res.status(400).json(CommonMessage.commonError(error));
  }
});

exports.resetPassword = expressAsyncHandler(async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    const AuthModeldetails = await AuthModel.findOne({
      email,
      resetpasswordCode: otp,
    });

    if (!AuthModeldetails) {
      return res
        .status(200)
        .json({ message: CommonMessage.resetPassword.wrong, success: false });
    }

    if (await compairpassword(password, AuthModeldetails.password)) {
      return res.status(200).json({
        message: CommonMessage.resetPassword.oldpassword,
        success: false,
      });
    }

    await AuthModel.findOneAndUpdate(
      { email },
      {
        password: await encryptpassword(password),
        resetpasswordCode: null,
        resetpasswordAt: null,
      },
      { new: true }
    )
      .then(() => {
        res.status(200).json({
          message: CommonMessage.resetPassword.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: CommonMessage.resetPassword.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.logout = expressAsyncHandler(async (req, res) => {
  try {
    const { usertoken } = req.body;
    console.log(usertoken);
    await TokenModel.deleteMany({ token: usertoken })
      .then(() => {
        res
          .status(200)
          .json({ message: CommonMessage.logout.success, success: true });
      })
      .catch((error) => {
        res.status(500).json({
          message: CommonMessage.logout.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});
