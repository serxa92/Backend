const express = require("express");
const router = express.Router();

const {getCars,createCar,getCarById,updateCar,deleteCar,} = require("../controllers/car.controller");
//Controladores
router.post("/", createCar);
router.get("/", getCars);
router.get("/:id", getCarById);
router.put("/:id", updateCar);
router.delete("/:id", deleteCar);

module.exports = router;
