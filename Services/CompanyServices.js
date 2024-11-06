// services/userService.js
const { json } = require('express');
const Company = require('../Models/CompanyModel');

exports.Create = async (Data) => {
  try {
    console.log("Request Data:", Data);
    
    // Check if `id` is present in the Data object
    if (Data._id) {
      // Update the existing company document
      const response = await Company.findByIdAndUpdate(
        Data._id,  // Document ID for update
        Data,     // Updated data
        { new: true, upsert: true }  // Options to return the updated doc and insert if not found
      );

      console.log('Updated Company:', response);
      return response;
      
    } else {
      // Insert a new company document
      const response = await Company.create(Data);
      
      console.log('Inserted Company:', response);
      return response;
    }
    
  } catch (err) {
    console.error('Error in Create/Update Company:', err);  // Log the error
    throw err;  // Rethrow the error for upstream error handling
  }
};



exports.getAllComapany = async () => {
  try {
    const response = await Company.find(); 
     // No callback here, just await the result
    console.log('Company:', response);  // Logs the users
    return response;  
  } catch (err) {
    console.error('Error fetching users:', err);  // Log and handle any errors
    throw err;  // Rethrow the error for upstream error handling
  }
};
