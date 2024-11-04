const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  IsActive: { type: Boolean },  // Changed "0" to boolean
  CreatedBy: { type: String },
  CreatedDate: { type: String },
  CompanyName:{type:String},
  ModifiedBy: { type: String },
  ModifiedDate: { type: String}
}, { timestamps: true });

// Explicitly specify the collection name as 'tblemployee'
const CompanyModel = mongoose.model("tblCompany", CompanySchema);

module.exports = CompanyModel;
