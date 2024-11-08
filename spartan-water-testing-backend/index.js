require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const waterKitRoutes = require('./routes/waterKitRoutes'); 

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Configure CORS to allow requests from your frontend origin
const allowedOrigins = ['http://localhost:5173']; // Make sure this matches your frontend origin
app.use(cors({
  origin: allowedOrigins,
  methods: 'GET,POST,PUT,DELETE', // Allow specific HTTP methods
  credentials: true, // Allow cookies to be sent if needed
}));

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/kits', waterKitRoutes);

// Connect to MongoDB
console.log('MongoDB URI:', process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    console.log('Active Database:', mongoose.connection.name);

    mongoose.connection.db.listCollections().toArray()
      .then(collections => {
        console.log('Collections in database:', collections.map(c => c.name));
      })
      .catch(err => console.error('Error listing collections:', err));
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
