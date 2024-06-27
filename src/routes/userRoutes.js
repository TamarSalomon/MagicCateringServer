const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('', userController.getUsers);
router.post('/signUp', userController.signUp);
router.put('/updateUser/:userId', userController.updateUser);
router.delete('/deleteUser/:userId', userController.deleteUser);

module.exports = router;