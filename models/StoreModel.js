const { default: mongoose } = require("mongoose");

const storeSchema = new mongoose.Schema({
    store_name: {
        type: String
    },
    remarks: {
        type: String
    }
})

module.exports = mongoose.model('stores', storeSchema)