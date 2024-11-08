// routes/waterKitRoutes.js
const express = require('express');
const router = express.Router();
const waterKitController = require('../Controllers/waterKitController');

// Route to get all water kits
router.get('/', waterKitController.getAllWaterKits);

// Route to get a specific water kit by ID
router.get('/:id', waterKitController.getWaterKitById);

module.exports = router;
