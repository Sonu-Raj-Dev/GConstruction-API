const express = require('express');
const router = express.Router();
const EmployeeMaster = require('../Controller/EmployeeMasterController');
const CompanyController=require('../Controller/CompanyController');

// Employee Details
router.post('/EmployeeMaster/Create', EmployeeMaster.Create);
router.get('/EmployeeMaster/getuser', EmployeeMaster.getUsers);

// Company Details
router.post('/Company/Create',CompanyController.Create);
router.get('/Company/getAllCompany',CompanyController.getAllCompany);

module.exports = router; // Ensure the router is exported
