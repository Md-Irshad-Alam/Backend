const { default: mongoose, mongo } = require('mongoose');

const AddCustomerSchema = new mongoose.Schema(
  {
    initials: {
      type: String,
      required: true,
    },
    customer_name: {
      type: String,
      required: true,
    },
    alias: {
      type: String,
      required: true,
    },
    customer_code: {
      type: Number,
      unique: true,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    billDetails: {
      ship_address: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      station: {
        type: String,
        required: true,
      },
      pin: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      mobile: {
        type: Number,
        required: true,
      },
      gstin: {
        type: String,
        required: true,
      },
      pan: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
      },
    },

    shipDetails: {
      ship_address: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      station: {
        type: String,
        required: true,
      },
      pin: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      mobile: {
        type: Number,
        required: true,
      },
      gstin: {
        type: String,
        required: true,
      },
      pan: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
      },
      fax: {
        type: Number,
      },
    },
  },
  { timestamps: true }
);
const cutomerAdd = mongoose.model('customer', AddCustomerSchema);
module.exports = cutomerAdd;
