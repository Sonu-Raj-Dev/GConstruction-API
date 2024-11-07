// services/userService.js
const User = require('../Models/EmployeeModel');


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
      // Update the user if _id exists
      const response = await User.findByIdAndUpdate(
        Data._id,   // The document's unique _id
        Data,        // The data to update
        { new: true, upsert: false }  // Return updated document, do not insert if not found
      );

      console.log('Updated Employee:', response);
      return response;
    } else {
      // Create a new user if no _id exists
      const user = new User(Data);
      const response = await user.save();  // Save the new user document

      console.log('Created User:', response);
      return response;  // Return the created user
    }
  } catch (err) {
    console.error('Error:', err);  // Log the error
    throw err;  // Rethrow error for upstream handling
  }
};

