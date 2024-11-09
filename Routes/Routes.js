const express = require('express');
const router = express.Router();
const EmployeeMaster = require('../Controller/EmployeeMasterController');
const CompanyController=require('../Controller/CompanyController');
const DashBoardController=require('../Controller/DashBoardController');
const CalenderController=require('../Controller/CalenderController');

// Employee Details
router.post('/EmployeeMaster/Create', EmployeeMaster.Create);
router.get('/EmployeeMaster/getuser', EmployeeMaster.getUsers);

// Company Details
router.post('/Company/Create',CompanyController.Create);
router.get('/Company/getAllCompany',CompanyController.getAllCompany);

// dashBoard Details

router.get('/DashBoard/getDahBoardData', DashBoardController.getDahBoardData);


// Calender Data
router.post('/Calender/Create',CalenderController.Create);
router.post('/Calender/getCalenderData',CalenderController.getCalenderData);


module.exports = router; // Ensure the router is exported
