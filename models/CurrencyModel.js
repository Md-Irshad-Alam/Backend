const { default: mongoose } = require('mongoose');

const CurrencySchema = new mongoose.Schema(
  {
    Currency: {
      type: String,
      max: 100,
      requred: true,
    },
    Symbol: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Currencys', CurrencySchema);
