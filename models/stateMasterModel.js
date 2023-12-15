const { default: mongoose } = require('mongoose');

const stateMasterSchema = new mongoose.Schema(
  {
    state: {
      type: String,
      required: true,
    },
    country: {
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

module.exports = mongoose.model('stateMasters', stateMasterSchema);
