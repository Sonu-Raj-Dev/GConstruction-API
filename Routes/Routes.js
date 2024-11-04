const express = require('express');
const router = express.Router();
const userController = require('../Controller/EmployeeController');
const CompanyController=require('../Controller/CompanyController');

// Employee Details
router.post('/user/Create', userController.createUser);
router.get('/user/getuser', userController.getUsers);

// Company Details
router.post('/Company/Create',CompanyController.createCompany);
router.get('/Company/getAllCompany',CompanyController.getAllCompany);

module.exports = router; // Ensure the router is exported
