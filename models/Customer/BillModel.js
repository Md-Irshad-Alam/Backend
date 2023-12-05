const { mongoose } = require('mongoose');

const billingAddress_schema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },

    district: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    police_station: {
      type: String,
    },
    postal_code: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    gstin: {
      type: String,
      required: true,
    },
    tin_no: {
      type: String,
      required: true,
    },
    pan: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const BillSchema = mongoose.model('billaddress', billingAddress_schema);

module.exports = BillSchema;
