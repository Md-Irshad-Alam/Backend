const Router = require('express').Router()

const { register, login, forgetPassword, verifyOtp, resetPassword, logout } = require('../controllers/AuthController')
const { validate } = require('../models/AuthModel')
const { registervalidation, loginvalidation, forgetPasswordvalidation, verifyOtpvalidation, resetPasswordvalidation } = require('../validation/AuthValidation')


Router.route('/register').post([registervalidation, validate], register)
Router.route('/login').post([loginvalidation, validate], login)
Router.route('/forgetpassword').post([forgetPasswordvalidation, validate], forgetPassword)
Router.route('/verifyotp').post([verifyOtpvalidation, validate], verifyOtp)
Router.route('/resetpassword').post([resetPasswordvalidation, validate], resetPassword)

// Router.route('/logout').get(isAuthorized, logout)

module.exports = Router