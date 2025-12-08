const express = require("express");
const {
  getCars,
  createCar,
  getCarById,
  updateCar,
  deleteCar,
  getCarByBrand,
  updateCarById,
  deleteCarById,
} = require("../controllers/car.controller");
const carsRouter = express.Router();
//Rutas
carsRouter.get("/brand/:brand", getCarByBrand);
carsRouter.post("/", createCar);
carsRouter.get("/", getCars);
carsRouter.put("/:id", updateCarById);
carsRouter.delete("/:id", deleteCarById);
carsRouter.get("/:id", getCarById);

module.exports = carsRouter;
