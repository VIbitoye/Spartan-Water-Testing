// controllers/waterKitController.js
const waterKitService = require('../Services/waterKitService'); // Import the service layer
const userService = require('../Services/userService'); // Import the service layer
// Controller to get all water kits
async function getAllWaterKits(req, res) {
  try {
    const kits = await waterKitService.getAllWaterKits(); // Call the service function
    res.status(200).json(kits); // Send a successful JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle any errors
  }
}

// Controller to get a specific water kit by ID
async function getWaterKitById(req, res) {
  try {
    const kit = await waterKitService.getWaterKitById(req.params.id); // Call the service function with ID
    if (!kit) {
      return res.status(404).json({ message: 'Kit not found' }); // Return 404 if not found
    }
    res.status(200).json(kit); // Send a successful JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle any errors
  }
}

async function addToCart(req, res) {
  try {
    const userId = req.params.userId;
    const kitId = req.params.kitId;

    // Fetch the water kit by ID
    const kit = await waterKitService.getWaterKitById(kitId);
    if (!kit) {
      return res.status(404).json({ message: 'Water kit not found' });
    }

    // Add the kit to the user's cart
    const updatedCart = await userService.addToCart(userId, kit);
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllWaterKits,
  getWaterKitById,
  addToCart
};
