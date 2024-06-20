const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
    businessName: String,
    address: String,
    email: String,
    businessPhone: String,
  });
  module.exports = mongoose.model('Business', BusinessSchema);
  