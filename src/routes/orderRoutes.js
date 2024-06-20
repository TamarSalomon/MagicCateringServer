const express = require('express');
const router = express.Router();

const orderController  = require('../controllers/orderController');

router.post('/addOrder',orderController.addOrder);
router.put('/updateOrder/:phone',orderController.updateOrder);
router.delete('/deleteOrder/:phone',orderController.deleteOrder);
router.get('/',orderController.getOrders);


module.exports = router;
