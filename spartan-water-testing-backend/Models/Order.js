// models/Order.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  id: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
  status: { type: String, default: 'Pending' },
  total: { type: Number, required: true },
  customerName: { type: String, required: true },
  shippingAddress: { type: String, required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CartItem' }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
