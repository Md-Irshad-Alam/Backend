const { default: mongoose } = require("mongoose");

const ArticleGroupMasterMasterSchema = new mongoose.Schema({
    group_name: {
        type: String,
        max: 100
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model('ArticleGroupMasterMasters', ArticleGroupMasterMasterSchema)