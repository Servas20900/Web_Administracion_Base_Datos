const express = require("express");
require("dotenv").config();
const { AppDataSource } = require("./config/data-source");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Conexión a Oracle con TypeORM inicializada");

    app.get("/", async (req, res) => {
      const userRepo = AppDataSource.getRepository("Usuario");
      const usuarios = await userRepo.find();
      res.json(usuarios);
    });

    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error al inicializar TypeORM:", err);
  });
