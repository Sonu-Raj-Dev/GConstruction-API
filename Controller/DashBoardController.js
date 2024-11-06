// controllers/userController.js
const User = require('../Models/DashBoardModel');
const userService = require('../Services/DashBoardServices');


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
    const Users = await User.intsert(Data); 
     // No callback here, just await the result
    console.log('Users:', Users);  // Logs the users
    return Users;  // Return the fetched users
  } catch (err) {
    console.error('Error fetching users:', err);  // Log and handle any errors
    throw err;  // Rethrow the error for upstream error handling
  }
};


