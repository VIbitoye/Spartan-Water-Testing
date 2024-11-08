// services/cartService.js
const User = require('../Models/User');
const CartItem = require('../Models/CartItem');
const WaterKit = require('../Models/WaterKit');

async function addToCart(userId, kitId, quantity) {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  const waterKit = await WaterKit.findById(kitId);
  if (!waterKit) throw new Error('Kit not found');

  const cartItem = new CartItem({ kit: waterKit._id, quantity });
  await cartItem.save();

  user.cart.push(cartItem._id); // Reference the CartItem by its ID
  await user.save();

  return cartItem;
}

module.exports = {
  addToCart,
};
