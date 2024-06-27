const express = require('express');
const router = express.Router();
const businessController  = require('../controllers/businessController');


router.put('/updateDetails',businessController.updateDetails);
router.get('/',businessController.getDetails);


module.exports = router;
