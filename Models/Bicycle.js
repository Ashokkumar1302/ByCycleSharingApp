const mongoose = require("mongoose");
const BicycleSchema = new mongoose.Schema({
  cycleId: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String, // Don't do { location: { type: String } }
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  available: {
    type: Boolean,
    default: true,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
  lastServiced: {
    type: Date,
    required: true,
  },
} ,{ timestamps: true });
module.exports = mongoose.model('Bicycle',BicycleSchema )