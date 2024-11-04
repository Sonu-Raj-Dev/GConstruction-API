// services/userService.js
const CompanyModel = require('../../Models/CompanyModel');

exports.CreateCompany = async (data) => {
  const Company = new Company(data);
  return await Company.save();
};

exports.getAllCompany = async () => {
  try {
    const Company = await CompanyModel.find();  // No callback here, just await the result
    console.log('Company:', Company);  // Logs the users
    return Company;  // Return the fetched users
  } catch (err) {
    console.error('Error fetching users:', err);  // Log and handle any errors
    throw err;  // Rethrow the error for upstream error handling
  }
};
