const Car = require("../models/Car");

// GET /cars
const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo todos los coches❌" });
  }
};

// POST /cars
const createCar = async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    const savedCar = await newCar.save();

    res.status(201).json(savedCar);
  } catch (error) {
    res.status(500).json({ error: "❌Error al crear el coche" });
  }
};
// =======================
// GET /cars/:id
// =======================
const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      res.status(404).json({ error: "Coche no encontrado❌" });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: "❌Error al obtener el coche" });
  }
};
// =======================
// PUT /cars/:id
// =======================
const updateCar = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedCar = await Car.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedCar) {
      res.status(404).json({ message: "Coche no encontrado❌" });
    }

    res.status(200).json(updatedCar);
  } catch (error) {
    res.status(500).json({
      error: "❌Error al actualizar el coche",
    });
  }
};
// =======================
// DELETE /cars/:id
// =======================
const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCar = await Car.findByIdAndDelete(id);

    if (!deletedCar) {
      res.status(404).json({ message: "Coche no encontrado❌" });
    }

    res.status(200).json({ message: "Coche eliminado correctamente🗑️" });
  } catch (error) {
    res.status(500).json({ error: "❌Error al eliminar el coche" });
  }
};

module.exports = {
  getCars,
  createCar,
  getCarById,
  updateCar,
  deleteCar,
};
