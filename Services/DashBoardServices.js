// services/userService.js
const User = require('../Models/DashBoardModel');


exports.getAllUsers = async () => {
  try {
    // Use populate to fetch company details based on CompanyId
    const users = await User.find().populate('CompanyId', 'CompanyName');  // 'CompanyId' is the field to populate, 'CompanyName' is the field you want from the Company collection

    console.log('Users with Company Names:', users);  // Logs users with populated company details
    return users;  // Return the fetched users with company details
  } catch (err) {
    console.error('Error fetching users:', err);  // Log and handle any errors
    throw err;  // Rethrow the error for upstream error handling
  }
};


exports.Create = async (Data) => {
  try {
    if (Data._id) {
      const response = await User.findByIdAndUpdate(
        Data._id,  // Document ID for update
        Data,     // Updated data
        { new: true, upsert: true }  // Options to return the updated doc and insert if not found
      );

      console.log('Updated Employee:', response);
      return response;

    } else {
      const response = await User.insertMany(Data);
      // No callback here, just await the result
      console.log('User:', response);  // Logs the users
      return response;  // Return the fetched users
    }
  } catch (err) {
    console.error('Error fetching users:', err);  // Log and handle any errors
    throw err;  // Rethrow the error for upstream error handling
  }

};
