const express = require("express");
const { createBicycle, updateBicycle, deleteBicycle, getAllBicycles, getBicycleById } = require("../controllers/bicyclesController");
const router = express.Router();


// Route to get all bicycles
router.get("/getAll",getAllBicycles);

// Route to get a bicycle by id
router.get("/getAll/:id", getBicycleById);

// Route to create a new bicycle
router.post("/create",createBicycle);

// Route to update a bicycle by id
router.put("/bicycle/:id",updateBicycle);

// Route to delete a bicycle by id
router.delete("bicycle/:id",deleteBicycle);

module.exports = router;