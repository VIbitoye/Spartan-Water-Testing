
// controllers/waterKitController.js
const waterKitService = require('../Services/waterKitService');

// Controller to get all water kits
async function getAllWaterKits(req, res) {
  try {
    const kits = await waterKitService.getAllWaterKits();
    res.status(200).json(kits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getWaterKitById(req, res) {
  try {
    const kit = await waterKitService.getWaterKitById(req.params.id);
    if (!kit) {
      return res.status(404).json({ message: 'Kit not found' });
    }
    res.status(200).json(kit);
  } catch (error) { 
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllWaterKits,
  getWaterKitById
};
