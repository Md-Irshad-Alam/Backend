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
    company: {
      type: String,
      required: true,
    },
    customer_code: {
      type: String,
      unique: true,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    ship_address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'shipAddress',
    },
    bill_address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'billaddress',
    },
    contact_person: {
      type: String,
    },
    fax: {
      type: String,
    },
    contact_phone: {
      type: String,
    },
    contact_mobile: {
      type: String,
    },
  },

  { timestamps: true }
);
const cutomerAdd = mongoose.model('customer', AddCustomerSchema);
module.exports = cutomerAdd;
