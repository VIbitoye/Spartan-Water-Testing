// services/waterKitService.js
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb'); // Use native MongoDB ObjectId

// Fetch all water kits
async function getAllWaterKits() {
  try {
    // Check collections in database (for debugging purposes)
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections in database:', collections.map(c => c.name));

    // Fetch all documents from the 'waterKits' collection
    const kits = await mongoose.connection.db.collection('waterKits').find({}).toArray();
    return kits;
  } catch (error) {
    console.error("Error fetching water kits:", error.message);
    throw new Error('Failed to load water kits');
  }
}

// Fetch a specific water kit by ID
async function getWaterKitById(id) {
  try {
    const kit = await mongoose.connection.db.collection('waterKits').findOne({ _id: new ObjectId(id) });
    return kit;
  } catch (error) {
    console.error("Error fetching water kit by ID:", error.message);
    throw new Error('Failed to load water kit by ID');
  }
}

module.exports = { getAllWaterKits, getWaterKitById };
