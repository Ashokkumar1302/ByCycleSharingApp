const mongoose = require("mongoose");
const BookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bicycle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bicycle",
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});
module.exports =mongoose.model('Booking', BookingSchema);