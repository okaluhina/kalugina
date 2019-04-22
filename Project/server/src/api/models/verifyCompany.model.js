const mongoose = require('mongoose');

const verifyCompanySchema = new mongoose.Schema({
  _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  token: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now, expires: 20 }
});

const verifyCompany = mongoose.model('verifyCompany', verifyCompanySchema);

module.exports = verifyCompany;
//28800