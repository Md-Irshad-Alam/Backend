const { default: mongoose, mongo } = require("mongoose");

const productSchema = new mongoose.Schema({
    article_code: {
        type: Number,
        required: true,
        unique: true,
        default: () => Math.floor(1000 + Math.random() * 9000), // Auto-generate a 4-digit number
    },
    article_name: {
        type: String,
        max: 100,
        required: true
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ArticleGroupMasterMasters'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AddCategories'
    },
    heel_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HeelCategorys'
    },
    forepart_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ForePartCategorys'
    },
    UOM: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'uoms'
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
        ref: 'AddCategories'
    },
    tikki_one: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AddCategories'
    },
    tikki_two: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AddCategories'
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







// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   articleCode: { type: String, required: true, unique: true },
//   articleName: { type: String, required: true, maxlength: 100 },
//   group: { type: String, ref: 'GroupMaster' },
//   category: { type: String, ref: 'CategoryMaster' },
//   heelCategory: { type: String, ref: 'HeelCategoryMaster' },
//   forePartCategory: { type: String, ref: 'ForepartCategoryMaster' },
//   uom: { type: String, ref: 'UOMMaster' },
//   hardness: { type: String, maxlength: 50 },
//   price: { type: Number, required: true, min: 0, max: 999999.99 },
//   gstin: { type: Number, required: true, min: 0, max: 999999.99 },
//   hsn: { type: String, maxlength: 20 },
//   remarks: { type: String },
//   type: { type: String, enum: ['Outsole', 'Midsole', 'Phylon', 'Raw Material', 'Lab Item'], required: true },
//   // Add Midsole Part Section
//   midsolePart: {
//     // Define Midsole Part fields here
//   },
//   image: { type: String },
//   tikki: { type: String, ref: 'CategoryMaster' },
//   tikki1: { type: String, ref: 'CategoryMaster' },
//   tikki2: { type: String, ref: 'CategoryMaster' },
//   // For Client's Reference
//   // Add fields for Client's Reference here
//   // For Production Reference
//   // Add fields for Production Reference here
//   // Size Type & standard weight
//   size: { type: String, maxlength: 4 },
//   outSize: { type: String, maxlength: 4 },
//   rate: { type: Number, min: 0, max: 999999.99 },
//   mould: { type: String },
//   outsoleWt: { type: Number, min: 0, max: 999.999 },
//   sideWallWt: { type: Number, min: 0, max: 999.999 },
//   bottomWt: { type: Number, min: 0, max: 999.999 },
//   logoLWt: { type: Number, min: 0, max: 999.999 },
//   logoRWt: { type: Number, min: 0, max: 999.999 },
//   sideWallLogoWt: { type: Number, min: 0, max: 999.999 },
//   groupId: { type: Number },
//   wl221: { type: String },
//   pairsPerHour: { type: Number },
//   targetPairs: { type: Number },
//   dummyMoulds: { type: String },
//   store: { type: String, ref: 'StoreMaster' },
// });

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;
