const express = require('express');
const router = express.Router();
const userController = require('../Controller/DashBoardController');
const CompanyController=require('../Controller/CompanyController');

// Employee Details
router.post('/DashBoard/Create', userController.Create);
router.get('/DashBoard/getuser', userController.getUsers);

// Company Details
router.post('/Company/Create',CompanyController.Create);
router.get('/Company/getAllCompany',CompanyController.getAllCompany);

module.exports = router; // Ensure the router is exported
