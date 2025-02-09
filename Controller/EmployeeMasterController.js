// controllers/userController.js
const User = require('../Models/EmployeeModel');
const userService = require('../Services/EmployeeMasterServices');


exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    console.log(users);
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.Create = async (req,res) => {
  try {
  const Data=req.body;
    const Users = await userService.Create(Data); 
     // No callback here, just await the result
    console.log('Users:', Users);  // Logs the users
    res.status(200).json({ success: true, data: Users });
  } catch (err) {
    console.error('Error fetching users:', err);  // Log and handle any errors
    throw err;  // Rethrow the error for upstream error handling
  }
};


