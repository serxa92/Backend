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

    res.status(201).json({
      data: savedCar,
      info: `Coche creado el : ${new Date(
        savedCar.createdAt
      ).toLocaleDateString("Es-es")}`,
    });
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
const updateCarById = async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
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
const deleteCarById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCar = await Car.findByIdAndDelete(id);

    if (!deletedCar) {
      res.status(404).json({ message: "Coche no encontrado❌" });
    }

    res.status(200).json({ message: "Coche eliminado correctamente 🗑️" });
  } catch (error) {
    res.status(500).json({ error: "❌Error al eliminar el coche" });
  }
};

// =======================
// GET by brand /cars/brand/:brand
// =======================

const getCarByBrand = async (req, res) => {
  try {
    const brand = req.params.brand.toLowerCase();
    const cars = await Car.find({ brand });
    if (cars.length === 0) {
      res
        .status(404)
        .json({ message: "No hay coches de esa marca en la base de datos❌" });
    }
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: "Error encontrando los coches" });
  }
};

module.exports = {
  getCars,
  createCar,
  getCarById,
  updateCarById,
  deleteCarById,
  getCarByBrand,
};
