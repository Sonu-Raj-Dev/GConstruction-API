const express = require('express');
const router = express.Router();
const EmployeeMaster = require('../Controller/EmployeeMasterController');
const CompanyController=require('../Controller/CompanyController');
const DashBoardController=require('../Controller/DashBoardController');


// Employee Details
router.post('/EmployeeMaster/Create', EmployeeMaster.Create);
router.get('/EmployeeMaster/getuser', EmployeeMaster.getUsers);

// Company Details
router.post('/Company/Create',CompanyController.Create);
router.get('/Company/getAllCompany',CompanyController.getAllCompany);

// dashBoard Details

router.get('/DashBoard/getDahBoardData', DashBoardController.getDahBoardData);



module.exports = router; // Ensure the router is exported
