const { default: mongoose, mongo } = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        article_code: {
            type: Number,
            required: true,
            unique: true,
            default: () => Math.floor(1000 + Math.random() * 9000), // Auto-generate a 4-digit number
        },
        article_name: {
            type: String,
            max: 100,
            required: true,
        },
        group: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ArticleGroupMasterMasters",
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AddCategories",
        },
        heel_category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "HeelCategorys",
        },
        forepart_category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ForePartCategorys",
        },
        UOM: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "uoms",
        },
        hardness: {
            type: String,
            max: 50,
        },
        price: {
            type: Number,
            min: 0,
            max: 999999.99
        },
        gstin: {
            type: Number,
            min: 0,
            max: 999999.99
        },
        hsn: {
            type: Number,
            max: 20,
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
            ref: "AddCategories",
        },
        tikki_one: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AddCategories",
        },
        tikki_two: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AddCategories",
        },
        client_ref: {
            logo_r: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ColorMasters",
            },
            logo_l: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ColorMasters",
            },
            outsole: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ColorMasters",
            },
            midsole: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ColorMasters",
            },
            bottom: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ColorMasters",
            },
            side_wall: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ColorMasters",
            },
            heel: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ColorMasters",
            },
            fore: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ColorMasters",
            },
            sidewall_color: {
                type: String,
                max: 100,
            },
            remarks: {
                type: String,
            },
        },
        production_ref: {
            logo_rs: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ColorMasters",
            },
            logo_ls: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ColorMasters",
            },
            outsoles: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ColorMasters",
            },
            midsoles: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ColorMasters",
            },
            bottoms: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ColorMasters",
            },
            side_walls: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ColorMasters",
            },
            heels: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ColorMasters",
            },
            fores: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ColorMasters",
            },
            sidewall_colors: {
                type: String,
                max: 100,
            },
            remarkss: {
                type: String,
            },
        },
        sizetype_standardweight: {
            size: {
                type: String,
                max: 4,
            },
            outSize: {
                type: String,
                max: 4,
            },
            rate: {
                type: Number,
                min: 0,
                max: 999.999,
            },
            mould: {
                type: Number,
            },
            outsole_wt: {
                type: Number,
                min: 0,
                max: 999.999,
            },
            sidewall_wt: {
                type: Number,
                min: 0,
                max: 999.999,
            },
            bottom_wt: {
                type: Number,
                min: 0,
                max: 999.999,
            },
            logo_l_wt: {
                type: Number,
                min: 0,
                max: 999.999,
            },
            logo_r_wt: {
                type: Number,
                min: 0,
                max: 999.999,
            },
            sidewall_logo_wt: {
                type: Number,
                min: 0,
                max: 999.999,
            },
            group_id: {
                type: Number,
            },
            wl_22_1: {
                type: String,
            },
            manufactured: {
                type: Number,
            },
            target: {
                type: Number,
            },
            dummy_moulds: {
                type: String,
            },
            store: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "stores",
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);

