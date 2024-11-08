// services/userService.js
const User = require('../Models/User');
const CartItem = require('../Models/CartItem');
const WaterKit = require('../Models/WaterKit'); // Import WaterKit model

// Create a new user
async function createUser(data) {
  const user = new User(data);
  return await user.save();
}

// Find a user by ID
async function getUserById(userId) {
  return await User.findById(userId).populate({
    path: 'cart',
    populate: { path: 'kit' }, // Populate kit details in each CartItem
  });
}

// Add an item to the user's cart
async function addToCart(userId, kitId, quantity) {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  // Find the WaterKit by its ID to verify it exists
  const waterKit = await WaterKit.findById(kitId);
  if (!waterKit) throw new Error('Water kit not found');

  // Check if the item already exists in the user's cart
  let cartItem = await CartItem.findOne({ user: userId, kit: kitId });
  if (cartItem) {
    // Update the quantity if the item already exists
    cartItem.quantity += quantity;
    await cartItem.save();
  } else {
    // Create a new CartItem if it doesn't exist
    cartItem = new CartItem({ user: userId, kit: kitId, quantity });
    await cartItem.save();
    user.cart.push(cartItem._id); // Reference the CartItem by its ID in the user's cart
  }

  await user.save();
  return cartItem;
}

module.exports = {
  createUser,
  getUserById,
  addToCart,
};
