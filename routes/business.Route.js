const express = require('express');
const router = express.Router();
// const { authenticateToken,authorizeRole } = require('../midlleware/authAdmin&User');
const besinessDetailsController  = require('../Controllres/BusinessDetails.Controller');

// router.use(authenticateToken);

router.put('/updateDetails',besinessDetailsController.updateDetails);
router.get('/getDetails',besinessDetailsController.getDetails);


module.exports = router;
