const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");
const TokenModel = require("../models/TokenModel");
const AuthModel = require("../models/AuthModel");

exports.superadmincheck = expressAsyncHandler(async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(404).json({ message: CommonMessage.middleware.notoken, success: false })
        }

        if (!req.headers.authorization.startsWith("Bearer")) {
            return res.status(404).json({ message: CommonMessage.middleware.notoken, success: false })
        }

        let token = req.headers.authorization.split("Bearer")[1]

        let tokendetails = await TokenModel.findOne({ token })

        if (!tokendetails) {
            return res.status(404).json({ message: CommonMessage.middleware.validtoken, success: false })
        }

        req.tokendetails = tokendetails

        let userdetails = AuthModel.findById(tokendetails.user)

        if (!userdetails) {
            return res.status(404).json({ message: CommonMessage.middleware.notvaliduser, success: false })
        }

        if (!userdetails.isActive) {
            return res.status(404).json({ message: CommonMessage.middleware.notactive, success: false })
        }

        if (userdetails.role != "65521f7369dc80908b25f784") {
            return res.status(404).json({ message: CommonMessage.middleware.superadmin, success: false })
        }

        req.userdetails = userdetails

        next()

    } catch (error) {
        res.status(400).json(CommonMessage.commonError(error))
    }
})