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

async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    
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
    const { userId, kitId } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
      throw new Error('Invalid quantity');
    }

    const updatedCart = await userService.addToCart(userId, kitId, quantity);
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}



// Controller to remove an item from the user's cart
async function removeFromCart(req, res) {
  try {
    const userId = req.params.userId; // Extracting userId from URL parameters
    const kitId = req.params.kitId;   // Extracting kitId from URL parameters

    // Call the removeFromCart function
    const updatedCart = await userService.removeFromCart(userId, kitId);
    res.status(200).json(updatedCart); // Return the updated cart
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports = {
  createUser,
  getUserById,
  addToCart,
  getAllUsers,
  removeFromCart
};
