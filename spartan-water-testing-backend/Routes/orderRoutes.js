const express = require('express');
const orderController = require('../Controllers/orderController');

const router = express.Router();

// Route to create a new order
router.post('/orders', orderController.createOrder);

// Route to get orders by user ID
router.get('/users/:userId/orders', orderController.getOrdersByUserId);

// Route to update order status
router.put('/orders/:orderId/status', orderController.updateOrderStatus);

module.exports = router;
