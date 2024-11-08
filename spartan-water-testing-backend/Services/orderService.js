const Order = require('../Models/Order');

// Create a new order
async function createOrder(orderData) {
  const order = new Order(orderData);
  return await order.save();
}

// Get all orders for a specific user
async function getOrdersByUserId(userId) {
  return await Order.find({ user: userId });
}

// Update the status of an order
async function updateOrderStatus(orderId, status) {
  return await Order.findOneAndUpdate(
    { id: orderId },
    { status },
    { new: true }
  );
}

module.exports = {
  createOrder,
  getOrdersByUserId,
  updateOrderStatus
};
