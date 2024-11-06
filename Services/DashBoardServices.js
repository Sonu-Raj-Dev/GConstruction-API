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

exports.Create = async (req,res) => {
  try {
  const Data=req.body;
    const User = await User.intsert(Data); 
     // No callback here, just await the result
    console.log('User:', User);  // Logs the users
    return User;  // Return the fetched users
  } catch (err) {
    console.error('Error fetching users:', err);  // Log and handle any errors
    throw err;  // Rethrow the error for upstream error handling
  }
};
