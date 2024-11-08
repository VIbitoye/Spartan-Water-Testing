// models/user.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  id: { type: String, required: true, unique: true }, // New ID property
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: 'CartItem' // Reference to CartItem model
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
