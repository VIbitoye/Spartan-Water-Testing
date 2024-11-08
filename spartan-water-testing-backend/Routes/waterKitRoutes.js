// routes/waterKitRoutes.js
const express = require('express');
const router = express.Router();
const waterKitController = require('../controllers/waterKitController');

// Route to get all water kits
router.get('/', (req, res) => {
  console.log("GET /api/kits called");
  waterKitController.getAllWaterKits(req, res);
});

// Route to get a specific water kit by ID
router.get('/:id', (req, res) => {
  console.log(`GET /api/kits/${req.params.id} called`);
  waterKitController.getWaterKitById(req, res);
});


module.exports = router;
