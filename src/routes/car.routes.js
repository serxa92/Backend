const express = require("express");
const {getCars,createCar,getCarById,updateCar,deleteCar,} = require("../controllers/car.controller");
const carsRouter = express.Router();
//Controladores
carsRouter.post("/", createCar);
carsRouter.get("/", getCars);
carsRouter.get("/:id", getCarById);
carsRouter.put("/:id", updateCar);
carsRouter.delete("/:id", deleteCar);

module.exports = carsRouter;
