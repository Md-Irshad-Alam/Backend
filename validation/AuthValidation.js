const { body, param } = require("express-validator");
const AuthModel = require("../models/AuthModel");

exports.registervalidation = [
    body("fname").notEmpty().withMessage('Provide your first name'),
    body("lname").notEmpty().withMessage('Provide your last name'),
    body("email").notEmpty().withMessage('Provide your email id').isEmail().withMessage('Provide valid email id').custom(async (value) => {
        await AuthModel.findOne({ email: value }).then((result) => {
            if (result) {
                throw new Error('Email id is already exsist')
            } else {
                return true
            }
        })
    }),
    body("countrycode").notEmpty().withMessage('Provide your country code'),
    body("mobile").notEmpty().withMessage('Provide your mobile number').isMobilePhone().withMessage('Provide valid mobile number').custom(async (value, { req }) => {
        await AuthModel.findOne({ mobile: value, countrycode: req.body.countrycode }).then((result) => {
            if (result) {
                throw new Error('Mobile number is already exsist')
            } else {
                return true
            }
        })
    }),
    body("password").notEmpty().withMessage('Provide your password'),
    body("confirmpassword").notEmpty().withMessage('Provide your password again').custom((value, { req }) => {
        if (value == req.body.password) {
            return true
        } else {
            throw new Error('Password and confirm password is not same')
        }
    })
]

exports.loginvalidation = [
    body("email").notEmpty().withMessage('Provide your email id').isEmail().withMessage('Provide valid email id'),
    body("password").notEmpty().withMessage('Provide your password')
]

exports.forgetPasswordvalidation = [
    body("email").notEmpty().withMessage('Provide your email id').isEmail().withMessage('Provide valid email id').custom(async (value, { req }) => {
        await AuthModel.findOne({ email: value }).then((result) => {
            if (result) {
                req.userdetails = result
                return true
            } else {
                throw new Error('Email id is not exsist')
            }
        })
    })
]

exports.verifyOtpvalidation = [
    body("email").notEmpty().withMessage('Provide your email id').isEmail().withMessage('Provide valid email id').custom(async (value) => {
        await AuthModel.findOne({ email: value }).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('Email id is not exsist')
            }
        })
    }),
    body("otp").notEmpty().withMessage('Provide otp').isLength({ max: 6, min: 6 }).withMessage('Provide valid otp')
]

exports.resetPasswordvalidation = [
    body("email").notEmpty().withMessage('Provide your email id').isEmail().withMessage('Provide valid email id').custom(async (value) => {
        await AuthModel.findOne({ email: value }).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('Email id is not exsist')
            }
        })
    }),
    body("otp").notEmpty().withMessage('Provide otp').isLength({ max: 6, min: 6 }).withMessage('Provide valid otp'),
    body("password").notEmpty().withMessage('Provide your password'),
    body("confirmpassword").notEmpty().withMessage('Provide your password again').custom((value, { req }) => {
        if (value == req.body.password) {
            return true
        } else {
            throw new Error('Password and confirm password is not same')
        }
    })
]

exports.deleteuservalidation = [
    param("id").notEmpty().withMessage('Provide employee id').custom(async (value) => {
        await AuthModel.findOne({ _id: value, role: "employee" }).then((result) => {
            if (result) {
                return true
            } else {
                throw new Error('Employee is not exsist')
            }
        })
    })
]