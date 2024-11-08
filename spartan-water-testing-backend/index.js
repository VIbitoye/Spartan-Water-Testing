require('dotenv').config(); // Load environment variables at the top

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/userRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const waterKitRoutes = require('./Routes/waterKitRoutes'); 

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Use separate routes for each resource
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/kits', waterKitRoutes); // Water kits endpoint

// Connect to MongoDB
console.log('MongoDB URI:', process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');

    // List all collections in the database
    mongoose.connection.db.listCollections().toArray()
      .then(collections => {
        console.log('Collections in database:', collections.map(c => c.name));
      })
      .catch(err => {
        console.error('Error listing collections:', err);
      });
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
