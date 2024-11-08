// models/WaterKit.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const waterKitSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: String,
    detailedDescription: String,
    price: { type: Number, required: true },
    image: String,
    category: String,
    steps: [String],
    reviews: [
      {
        rating: { type: Number, min: 1, max: 5 },
        text: String,
      },
    ],
    specifications: [
      {
        label: String,
        value: String,
      },
    ],
  },
  { collection: 'waterKits' } // Explicitly set the collection name
);

const WaterKit = mongoose.model('WaterKit', waterKitSchema);
module.exports = WaterKit;
