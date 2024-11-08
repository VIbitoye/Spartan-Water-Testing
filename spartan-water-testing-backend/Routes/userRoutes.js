// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

// Route to create a user
router.post('/users', userController.createUser);

// Route to get a user by ID
router.get('/users/:id', userController.getUserById);

// Route to add an item to the user's cart
router.post('/users/:id/add-cart', userController.addToCart);

module.exports = router;
