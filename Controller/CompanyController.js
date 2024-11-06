
const CommonService = require('./CommonService/CommonService');

exports.Create = async (req, res) => {
  try {
    const Company = await userService.CreateCompany(req.body);
    res.status(201).json({ success: true, data: Company });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getAllCompany = async (req, res) => {
  try {
    const Company = await CommonService.getAllCompany();
    console.log(Company);
    res.status(200).json({ success: true, data: Company });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
