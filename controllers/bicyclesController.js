// const Bicycle = require("../models/Bicycle");
const Bicycle = require("../Models/Bicycle");

// Controller function to get all bicycles
const getAllBicycles = async (req, res) => {
  try {
    const bicycles = await Bicycle.find();
    res.status(200).json({ bicycles });
  } catch (error) {
    res.status(500).json({ message: "Error fetching bicycles", error });
  }
};

// Controller function to get a bicycle by id
const getBicycleById = async (req, res) => {
  try {
    const bicycle = await Bicycle.findById(req.params.id);
    res.status(200).json({ bicycle });
  } catch (error) {
    res.status(500).json({ message: "Error fetching bicycle", error });
  }
};

// Controller function to create a new bicycle
const createBicycle = async (req, res) => {
 
     const bicycle = new Bicycle(req.body);
    try {
//   const {cycleId,type,brand,model,available,pricePerHour}=req.body

//   const bicycle=new Bicycle({
//     cycleId,
//     type,
//     brand,
//     model,
//     available,
//     pricePerHour,
//   });
  
    await bicycle.save();
    res.status(201).json({ message: "Bicycle created successfully", bicycle });
  }
   catch (error) {
    res.status(500).json({ message: "Error creating bicycle", error });
  }
};

// Controller function to update a bicycle by id
const updateBicycle = async (req, res) => {
  try {
    const bicycle = await Bicycle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Bicycle updated successfully", bicycle });
  } catch (error) {
    res.status(500).json({ message: "Error updating bicycle", error });
  }
};

// Controller function to delete a bicycle by id
const deleteBicycle = async (req, res) => {
  try {
    await Bicycle.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "Bicycle deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting bicycle", error });
  }
};

module.exports = {
  getAllBicycles,
  getBicycleById,
  createBicycle,
  updateBicycle,
  deleteBicycle,
};