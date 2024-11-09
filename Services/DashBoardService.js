// services/userService.js
const User = require('../Models/EmployeeModel');


exports.getDashBoardData = async () => {
  try {
    const users = await User.find({ IsActive: 1 })  
    return users;  // Return the fetched users with company details
  } catch (err) {
    console.error('Error fetching users:', err);  // Log and handle any errors
    throw err;  // Rethrow the error for upstream error handling
  }
};


