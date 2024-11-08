const orderService = require('../Services/orderService');

// Controller to create an order
async function createOrder(req, res) {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Controller to get all orders by user ID
async function getOrdersByUserId(req, res) {
  try {
    const orders = await orderService.getOrdersByUserId(req.params.userId);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Controller to update the status of an order
async function updateOrderStatus(req, res) {
  try {
    const updatedOrder = await orderService.updateOrderStatus(req.params.orderId, req.body.status);
    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createOrder,
  getOrdersByUserId,
  updateOrderStatus
};
