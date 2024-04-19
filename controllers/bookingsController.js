const mongoose = require("mongoose");
const Booking = require('../Models/Booking')

// Controller function to create a booking
const createBooking = async (req, res) => {
  const { user, bicycle, startDate, endDate } = req.body;

  const booking = new Booking({
    user,
    bicycle,
    startDate,
    endDate,
  });

  try {
    await booking.save();
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
};

// Controller function to get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user").populate("bicycle");
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};

// Controller function to get a booking by id
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("user")
      .populate("bicycle");
    res.status(200).json({ booking });
  } catch (error) {
    res.status(500).json({ message: "Error fetching booking", error });
  }
};

// Controller function to delete a booking by id
const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting booking", error });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  getBookingById,
  deleteBooking,
};