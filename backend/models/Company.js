const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: String,
  ruc: String,
  address: String,
  phone: String,
  description: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Company', CompanySchema);
