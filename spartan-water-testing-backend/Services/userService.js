const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
// Fetch all users
async function getAllUsers() {
  const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections in database:', collections.map(c => c.name));

    // Fetch all documents from the 'waterKits' collection
    const users = await mongoose.connection.db.collection('users').find({}).toArray();
    return users;
}

// Fetch user by ID
async function getUserById(id) {
  return mongoose.connection.db.collection('users').findOne({ _id: new ObjectId(id) });
}
async function getKitById(kitId) {
  try {
    // Validate and convert kitId to ObjectId
    if (!ObjectId.isValid(kitId)) {
      throw new Error('Invalid kitId');
    }

    const kitObjectId = new ObjectId(kitId);
    const kit = await mongoose.connection.db.collection('waterKits').findOne({ _id: kitObjectId });

    if (!kit) {
      throw new Error('Kit not found');
    }

    return kit; // Return the full kit object
  } catch (error) {
    console.error("Error fetching kit by ID:", error.message);
    throw error;
  }
}

// Add a water kit to the user's cart
async function addToCart(userId, kitId, quantity) {
  try {
    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(kitId)) {
      throw new Error('Invalid userId or kitId');
    }

    const kit = await getKitById(kitId);
    if (!kit) throw new Error('Kit not found');

    const user = await mongoose.connection.db.collection('users').findOne({ _id: new mongoose.Types.ObjectId(userId) });
    if (!user) throw new Error('User not found');

    const cart = user.cart || [];
    const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

    if (totalItemsInCart + quantity > 30) {
      throw new Error('Cannot add more items. Cart has reached the maximum limit of 30 items.');
    }

    const existingItem = cart.find(item => item.kitId.toString() === kitId);
    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;
      if (newQuantity > 10) throw new Error('Cannot add more of this item. Maximum quantity of 10 reached for this item.');

      await mongoose.connection.db.collection('users').updateOne(
        { _id: new mongoose.Types.ObjectId(userId), 'cart.kitId': kitId },
        { $set: { 'cart.$.quantity': newQuantity } }
      );
    } else {
      await mongoose.connection.db.collection('users').updateOne(
        { _id: new mongoose.Types.ObjectId(userId) },
        {
          $push: {
            cart: {
              kitId,
              id: kit.id,
              name: kit.name,
              image: kit.image,
              description: kit.description,
              price: kit.price,
              quantity
            }
          }
        }
      );
    }

    const updatedUser = await mongoose.connection.db.collection('users').findOne({ _id: new mongoose.Types.ObjectId(userId) });
    return updatedUser.cart;
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    throw error;
  }
}

// Function to completely remove an item from the user's cart
async function removeFromCart(userId, kitId) {
  try {
    // Validate `userId` and `kitId` as MongoDB ObjectId strings
    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(kitId)) {
      throw new Error('Invalid userId or kitId');
    }

    // Fetch the user to ensure they exist
    const user = await mongoose.connection.db.collection('users').findOne({ _id: new mongoose.Types.ObjectId(userId) });
    if (!user) {
      throw new Error('User not found');
    }

    // Use `$pull` to remove the item with the specified `kitId` from the cart
    await mongoose.connection.db.collection('users').updateOne(
      { _id: new mongoose.Types.ObjectId(userId) },
      { $pull: { cart: { kitId: new ObjectId(kitId) } } }
    );

    // Fetch and return the updated cart
    const updatedUser = await mongoose.connection.db.collection('users').findOne({ _id: new mongoose.Types.ObjectId(userId) });
    return updatedUser.cart;
  } catch (error) {
    console.error("Error removing from cart:", error.message);
    throw error;
  }
}


module.exports = { getAllUsers, getUserById, addToCart, removeFromCart };
