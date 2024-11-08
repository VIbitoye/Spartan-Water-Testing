// models/CartItem.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartItemSchema = new Schema({
  kit: { type: mongoose.Schema.Types.ObjectId, ref: 'WaterKit', required: true },
  quantity: { type: Number, required: true, default: 1 },
});

const CartItem = mongoose.model('CartItem', cartItemSchema);
module.exports = CartItem;
