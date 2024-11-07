
const DashBoardService = require('../Services/DashBoardService');

exports.getDahBoardData = async (req, res) => {
    try {
      const users = await DashBoardService.getDashBoardData();
      console.log(users);
      res.status(200).json({ success: true, data: users });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };