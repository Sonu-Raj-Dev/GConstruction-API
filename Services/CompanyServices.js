// services/userService.js
const Company = require('../Models/CompanyModel');


exports.Create = async (req,res) => {
    try {
    const Data=req.body;
      const Company = await Company.intsert(Data); 
       // No callback here, just await the result
      console.log('Company:', Company);  // Logs the users
      return Company;  // Return the fetched users
    } catch (err) {
      console.error('Error fetching users:', err);  // Log and handle any errors
      throw err;  // Rethrow the error for upstream error handling
    }
  };
  


exports.getAllComapany = async () => {
  try {
    const Company = await Company.find(); 
     // No callback here, just await the result
    console.log('Company:', Company);  // Logs the users
    return Company;  // Return the fetched users
  } catch (err) {
    console.error('Error fetching users:', err);  // Log and handle any errors
    throw err;  // Rethrow the error for upstream error handling
  }
};
