const mongoose = require('mongoose');

// Fetch all orders
async function getAllOrders() {
  return mongoose.connection.db.collection('orders').find({}).toArray();
}

// Fetch order by ID
async function getOrderById(id) {
  return mongoose.connection.db.collection('orders').findOne({ _id: new mongoose.mongo.ObjectId(id) });
}

module.exports = { getAllOrders, getOrderById };
