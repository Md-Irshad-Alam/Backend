const { default: mongoose } = require("mongoose");
const AuthModel = require("../models/AuthModel");
const { encryptpassword } = require("../helpers/AuthHelper");
const moment = require("moment-timezone");

mongoose.connect(process.env.MONGO_URI)

const db = mongoose.connection

db.on("connected", () => console.log("Database is successfully connected!"))
db.on("error", (error) => console.log(`Database error ${error.toString()}`))
db.on("disconnected", () => console.log("Database is now disconnected !"))

AuthModel.findOne({ role: "65521f7369dc80908b25f784" }).then(async (userdetails) => {
    if (!userdetails) {
        await AuthModel.create({
            fname: 'super',
            lname: 'admin',
            email: 'admin@gmail.com',
            emailverified: {
                isVerified: true,
                verifyAt: moment().utc().format()
            },
            mobile: 7875789463,
            countrycode: '+91',
            mobileverified: {
                isVerified: true,
                verifyAt: moment().utc().format()
            },
            password: await encryptpassword("123456789"),
            isActive: true,
            role: "65521f7369dc80908b25f784"
        })
    }
})