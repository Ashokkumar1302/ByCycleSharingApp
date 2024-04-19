const express = require("express");
const { createBooking, getAllBookings, getBookingById, deleteBooking } = require("../controllers/bookingsController");
const router = express.Router();


// Route to create a booking
router.post("/bookings", createBooking);

// Route to get all bookings
router.get("/getAll", getAllBookings);

// Route to get a booking by id
router.get("/bookings/:id", getBookingById);

// Route to delete a booking by id
router.delete("/bookings/:id", deleteBooking);

module.exports = router;