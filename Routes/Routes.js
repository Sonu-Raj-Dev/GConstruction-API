// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../Controller/UserController');

router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);

module.exports = router;
