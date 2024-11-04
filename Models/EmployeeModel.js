const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  IsActive: { type: Boolean },  // Changed "0" to boolean
  CreatedBy: { type: String },
  CreatedDate: { type: String },
  DtOfJoining: { type: String},
  FirstName: { type: String},
  LastName: { type: String },
  ModifiedBy: { type: String },
  ModifiedDate: { type: String}
}, { timestamps: true });

// Explicitly specify the collection name as 'tblemployee'
const UserModel = mongoose.model("tblemployee", UserSchema);

module.exports = UserModel;
