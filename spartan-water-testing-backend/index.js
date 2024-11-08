require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet'); // Import helmet for security
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const waterKitRoutes = require('./routes/waterKitRoutes'); 

const app = express();
app.use(express.json());
app.use(helmet()); // Apply security headers with helmet

// Configure CORS to allow requests from frontend origins
const allowedOrigins = [
  'http://localhost:5173',           // Dev frontend
  'https://spartan-water-testing.onrender.com'  // Production frontend URL
];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/kits', waterKitRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
