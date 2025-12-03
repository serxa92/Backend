//Imports
require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const carRoutes = require("./src/routes/car");

//1. Creamos instancia con Express
const app = express();

//2.Implementamos el middleware para parsear JSON en el body de las peticiones
app.use(express.json());

//3. Nos conectamos con MongoDB
connectDB();

//4. Rutas
app.use("/cars", carRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "La API está funcionando" });
});

//5. Rutas de prueba
app.get("/", (req, res) => {
  res.status(200).json({ message: "La API está funcionando ✅" });
});

//6. 404
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada ❌" });
});

//7. Arrancamos el servidor y lo escuchamos en nuestro puerto local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});
