
const CompanyService = require('../Services/CompanyServices');

exports.Create = async (req, res) => {
  try {
    console.log("request:",req);
    const Company = await CompanyService.Create(req.body);
    res.status(201).json({ success: true, data: Company });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getAllCompany = async (req, res) => {
  try {
    const Company = await CompanyService.getAllComapany();
    console.log(Company);
    res.status(200).json({ success: true, data: Company });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
