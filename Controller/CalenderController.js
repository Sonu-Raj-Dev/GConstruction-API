// controllers/userController.js
const User = require('../Models/CalnderModel');
const CalenderService = require('../Services/CalenderService');


exports.getCalenderData = async (req, res) => {
  try {
    const Data=req.body;
    const users = await CalenderService.getCalenderData(Data);
    console.log(users);
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.Create = async (req,res) => {
  try {
  const Data=req.body;
    const Users = await CalenderService.Create(Data); 
     // No callback here, just await the result
    console.log('Users:', Users);  // Logs the users
    res.status(200).json({ success: true, data: Users });
  } catch (err) {
    console.error('Error fetching users:', err);  // Log and handle any errors
    throw err;  // Rethrow the error for upstream error handling
  }
};


