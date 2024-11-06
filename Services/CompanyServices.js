// services/userService.js
const { json } = require('express');
const Company = require('../Models/CompanyModel');


exports.Create = async (Data) => {
    try {
    console.log("Response Data:",Data);
      const response = await Company.insertMany(Data); 
       // No callback here, just await the result
      console.log('Company:', response);  // Logs the users
      return response;
    } catch (err) {
      console.error('Error fetching users:', err);  // Log and handle any errors
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
