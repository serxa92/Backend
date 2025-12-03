const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    brand: { type: String, default: "Marca desconocida" },
    model: { type: String, default: "Modelo desconocido" },
    year: { type: Number, default: 2000 },
    mileage: { type: Number, default: 0 },
    notes: { type: String, default: "" },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("Car", carSchema);
