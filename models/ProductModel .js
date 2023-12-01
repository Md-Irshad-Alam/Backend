const { default: mongoose, mongo } = require("mongoose");

const productSchema = new mongoose.Schema({
    article_code: {
        type: Number,
        required: true,
        unique: true,
        default: 1
    },
    article_name: {
        type: String,
        max: 100,
        required: true
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'groups'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories'
    },
    heel_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HeelCategory'
    },
    forepart_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ForepartCategory'
    },
    UOM: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UOMS'
    },
    hardness: {
        type: String,
        max: 50
    },
    price: {
        type: Number,
    },
    gstin: {
        type: Number,
    },
    hsn: {
        type: Number,
        max: 20
    },
    remarks: {
        type: String,
    },
    type: {
        type: String,
    },
    image: {
        type: Array,
    },
    tikki: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    tikki_one: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    tikki_two: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    client_ref: {
        logo_r: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ColorMasters'
        },
        logo_l: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ColorMasters'
        },
        outsole: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ColorMasters'
        },
        midsole: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ColorMasters'
        },
        bottom: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ColorMasters'
        },
        side_wall: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ColorMasters'
        },
        heel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ColorMasters'
        },
        fore: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ColorMasters'
        },
        sidewall_color: {
            type: String,
            max: 100
        },
        remarks: {
            type: String,
        },
    },
    production_ref: {
        logo_r: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ColorMasters'
        },
        logo_l: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ColorMasters'
        },
        outsole: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ColorMasters'
        },
        midsole: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ColorMasters'
        },
        bottom: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ColorMasters'
        },
        side_wall: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ColorMasters'
        },
        heel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ColorMasters'
        },
        fore: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ColorMasters'
        },
        sidewall_color: {
            type: String,
            max: 100
        },
        remarks: {
            type: String,
        },
    },
    sizetype_standardweight: {
        size: {
            type: String,
            max: 4
        },
        outSize: {
            type: String,
            max: 4
        },
        rate: {
            type: Number
        },
        mould: {
            type: Number
        },
        outsole_wt: {
            type: Number
        },
        sidewall_wt: {
            type: Number
        },
        bottom_wt: {
            type: Number
        },
        logo_l_wt: {
            type: Number
        },
        logo_r_wt: {
            type: Number
        },
        sidewall_logo_wt: {
            type: Number
        },
        group_id: {
            type: Number
        },
        wl_22_1: {
            type: String
        },
        manufactured: {
            type: Number
        },
        target: {
            type: Number
        },
        dummy_moulds: {
            type: String
        },
        store: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'stores'
        }
    }
}, { timestamps: true })

module.exports = mongoose.model('products', productSchema)