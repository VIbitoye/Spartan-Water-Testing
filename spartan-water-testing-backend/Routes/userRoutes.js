// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

// Route to create a user
router.post('/create', userController.createUser);

router.get('/', userController.getAllUsers);

// Route to get a user by ID
router.get('/:id', userController.getUserById);

// Route to add an item to the user's cart
router.post('/cart/:userId/:kitId', userController.addToCart);

// Route to remove an item from the user's cart
router.delete('/cart/:userId/:kitId', userController.removeFromCart);

module.exports = router;
