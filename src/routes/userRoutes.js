const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/getUsers',authorizeRole('admin'),userController.getUsers);


module.exports = router;
