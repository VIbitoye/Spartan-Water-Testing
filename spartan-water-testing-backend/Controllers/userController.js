// controllers/userController.js
const userService = require('../Services/userService'); // Use correct path (note lowercase 'services')

// Controller to create a user
async function createUser(req, res) {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Controller to get user by ID
async function getUserById(req, res) {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Controller to add an item to the user's cart
async function addToCart(req, res) {
  try {
    const updatedUser = await userService.addToCart(req.params.id, req.body); // req.params.id should be the user ID
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createUser,
  getUserById,
  addToCart
};
