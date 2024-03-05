const { default: mongoose, mongo } = require('mongoose');

const AddCustomerSchema = new mongoose.Schema(
  {
    initials: {
      type: String,
      default: 'Ms./Mis.',
    },
    customer_name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    customer_code: {
      type: String,
      unique: true,
    },
    currency: {
      type: String,
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
