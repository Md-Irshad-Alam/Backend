const { default: mongoose } = require('mongoose');

const CountrySchema = new mongoose.Schema(
  {
    country: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('countries', CountrySchema);
