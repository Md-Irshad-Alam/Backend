const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const TokenModel = require("../models/TokenModel")

exports.encryptpassword = async (password) => {
    let salt = bcryptjs.genSaltSync(15)
    return bcryptjs.hashSync(password, salt)
}

exports.compairpassword = async (password, haspassword) => {
    return bcryptjs.compareSync(password, haspassword)
}

exports.tokens = async (id) => {
    return new Promise(function (resolve, reject) {
        TokenModel.create({ user: id, token: jwt.sign({ id }, process.env.TOKEN_KEY) }).then((result) => {
            resolve(result.token)
        }).catch((error) => {
            reject(error)
        })
    })
}

exports.verifytoken = async (usertoken) => {
    return jwt.verify(usertoken, process.env.TOKEN_KEY, { complete: true })
}