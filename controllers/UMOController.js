const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");
const UOMModel = require("../models/UOMModel");


//save
exports.saveUOM  = expressAsyncHandler(async (req, res) => {
    try {
        const { UOM , isActive } = req.body
        await UOMModel .create({ UOM , isActive }).then(() => {
            res.status(200).json({ message: CommonMessage.saveUOM .success, success: true })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.saveUOM .failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

//edit -update
exports.updateUOM  = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const { UOM  } = req.body

        await UOMModel .findOneAndUpdate({ _id: id }, { UOM  }).then((result) => {
            res.status(200).json({ message: CommonMessage.updateUOM .success, success: true, UOM : result })
        }).catch((error) => {
            res.status(400).json({ message: CommonMessage.updateUOM .failed, success: false, error: error.toString() })
        })
    } catch (error) {
        res.status(500).json(CommonMessage.commonError(error))
    }
})

