const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');



router.get('',serviceController.getServices)
router.get('/:type',serviceController.getServiceByServiceType);
router.post('/addService',serviceController.addService);
router.delete('deleteService/:phone',serviceController.deleteService);
router.put('updateService/:phone', serviceController.updateService)

module.exports = router;