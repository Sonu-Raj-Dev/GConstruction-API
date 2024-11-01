// services/userService.js
const User = require('../Models/UserModel');

exports.createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

exports.getAllUsers = async () => {
  return await User.find();
};
