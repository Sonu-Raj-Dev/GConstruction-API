// services/userService.js
const User = require('../Models/DashBoardModel');


exports.getAllUsers = async () => {
  try {
    const users = await User.find(); 
     // No callback here, just await the result
    console.log('Users:', users);  // Logs the users
    return users;  // Return the fetched users
  } catch (err) {
    console.error('Error fetching users:', err);  // Log and handle any errors
    throw err;  // Rethrow the error for upstream error handling
  }
};

exports.Create = async (data) => {
  try {
    const response = await User.insertMany(data); 
     // No callback here, just await the result
    console.log('User:', response);  // Logs the users
    return response;  // Return the fetched users
  } catch (err) {
    console.error('Error fetching users:', err);  // Log and handle any errors
    throw err;  // Rethrow the error for upstream error handling
  }
};
