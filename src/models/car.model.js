const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Definimos el esquema del coche
const carSchema = new Schema(
  {
    brand: {
      type: String,
      default: "marca desconocida",
      //Guardamos la marca siempre en minúsculas
      set: (value) => value.toLowerCase(),
    },
    model: { type: String, default: "Modelo desconocido" },
    year: { type: Number, default: 2000 },
    mileage: { type: Number, default: 0 },
    notes: { type: String, default: "" },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //Referencia al usuario propietario
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model("Car", carSchema);
