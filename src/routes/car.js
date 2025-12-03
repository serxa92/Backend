const express = require("express");
const router = express.Router();

const Car = require("../models/Car");

// =======================
// POST
// Crea un nuevo coche en la base de datos
// =======================
router.post("/", async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    return res.status(201).json(newCar);
  } catch (error) {
    console.error("❌Error al crear el coche:", error);
    return res
      .status(500)
      .json({ message: "❌Error al crear el coche", error: error.message });
  }
});
// =======================
// GET
// Obtiene todos los coches
// =======================
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    return res.status(200).json(cars);
  } catch (error) {
    console.error("❌Error al obtener los coches:", error);
    return res
      .status(500)
      .json({ message: "❌Error al obtener los coches", error: error.message });
  }
});
// =======================
// GET /cars/:id
// Obtiene un coche por su ID
// =======================
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const car = await Car.findById(id);

    if (!car) {
      return res.status(404).json({ message: "Coche no encontrado❌" });
    }

    return res.status(200).json(car);
  } catch (error) {
    console.error("❌Error al obtener el coche:", error);
    return res
      .status(500)
      .json({ message: "❌Error al obtener el coche", error: error.message });
  }
});

// =======================
// PUT /cars/:id
// Actualiza un coche completo
// =======================
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedCar = await Car.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedCar) {
      return res.status(404).json({ message: "Coche no encontrado❌" });
    }

    return res.status(200).json(updatedCar);
  } catch (error) {
    console.error("❌Error al actualizar el coche:", error);
    return res
      .status(500)
      .json({
        message: "❌Error al actualizar el coche",
        error: error.message,
      });
  }
});

// =======================
// DELETE /cars/:id
// Elimina un coche
// =======================
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCar = await Car.findByIdAndDelete(id);

    if (!deletedCar) {
      return res.status(404).json({ message: "Coche no encontrado❌" });
    }

    return res.status(200).json({ message: "Coche eliminado correctamente🗑️" });
  } catch (error) {
    console.error("❌Error al eliminar el coche:", error);
    return res
      .status(500)
      .json({ message: "❌Error al eliminar el coche", error: error.message });
  }
});

module.exports = router;
