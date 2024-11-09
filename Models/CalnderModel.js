const mongoose = require('mongoose');

const CalenderSchema = new mongoose.Schema({
  IsActive: { type: Boolean },  // Changed "0" to boolean
  CreatedBy: { type: String },
  CreatedDate: { type: String },
  AttendanceDate:{type:String},
  ModifiedBy: { type: String },
  ModifiedDate: { type: String},
  Remark:{type:String},
  Amount:{type:String},
  IsPresent:{type:Boolean},
  EmployeeId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"tblemployee"
  },
  CompanyId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"tblCompany"
  }
}, { timestamps: true });

// Explicitly specify the collection name as 'tblemployee'
const CalenderModel = mongoose.model("tblAttendance", CalenderSchema);

module.exports = CalenderModel;
