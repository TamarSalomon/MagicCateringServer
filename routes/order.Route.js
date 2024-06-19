const express = require('express');
const router = express.Router();

const orderContoller  = require('../Controllres/orders.Controller');

router.post('/addOrder',orderContoller.addOrder);//OK
router.put('/updateOrder/:phone',orderContoller.updateOrder);
router.delete('/deleteOrder/:phone',orderContoller.deleteOrder);
router.get('/getOrders',orderContoller.getOrders);


module.exports = router;
