// services/waterKitService.js
const WaterKit = require('../Models/WaterKit');

// Fetch all water kits
async function getAllWaterKits() {
  try {
    console.log("Fetching all water kits from the database...");
    const kits = await WaterKit.find();
    console.log("Fetched water kits:", kits); // Log the kits
    return kits;
  } catch (error) {
    console.error("Error fetching water kits:", error.message);
    throw new Error('Failed to load water kits: ' + error.message);
  }
}
async function getWaterKitById(id) {
  try {
    console.log(`Fetching water kit with ID: ${id}`);
    const kit = await WaterKit.findById(id);
    return kit;
  } catch (error) {
    console.error("Error fetching water kit by ID:", error.message);
    throw new Error('Failed to load water kit by ID: ' + error.message);
  }
}

module.exports = {
  getAllWaterKits,
  getWaterKitById
};

