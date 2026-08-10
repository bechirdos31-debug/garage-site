const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 1. الربط بقاعدة البيانات (MongoDB)
mongoose
  .connect(
    "mongodb://garage:garage1234567@ac-dz9ub8o-shard-00-00.pkqkqcy.mongodb.net:27017,ac-dz9ub8o-shard-00-01.pkqkqcy.mongodb.net:27017,ac-dz9ub8o-shard-00-02.pkqkqcy.mongodb.net:27017/?ssl=true&replicaSet=atlas-yizuoe-shard-0&authSource=admin&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.log("MongoDB connection error:", err));

// 2. Schema & Model للمواعيد
const rendezVousSchema = new mongoose.Schema({
  nom: String,
  pre: String,
  telephone: String,
  services: String,
  date: String,
  heure: String,
  createdAt: { type: Date, default: Date.now },
});

const RendezVous = mongoose.model("RendezVous", rendezVousSchema);

// 3. Route تسجيل موعد جديد من الحريف (POST)
app.post("/api/roundez", async (req, res) => {
  try {
    console.log("=== NEW REQUEST RECEIVED ===");
    console.log("Data:", req.body);

    const nouveauRendezVous = new RendezVous(req.body);
    await nouveauRendezVous.save();

    console.log("Saved to database successfully!");

    res.json({
      message: "Rendez-vous enregistré avec succès dans la base de données !",
    });
  } catch (error) {
    console.error("Error saving to database:", error);
    res.status(500).json({ message: "Erreur lors de l'enregistrement." });
  }
});

// 4. Route جلب المواعيد للـ Admin (GET)
app.get("/api/rendez-vous", async (req, res) => {
  try {
    const liste = await RendezVous.find().sort({ createdAt: -1 });
    res.json(liste);
  } catch (error) {
    console.error("Error fetching data:", error);
    res
      .status(500)
      .json({ message: "Erreur serveur lors de la récupération." });
  }
});

// 5. تشغيل السيرفر
app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
app.post("/api/rendez-vous", async (req, res) => {
  try {
    console.log("=== NEW REQUEST RECEIVED ===");
    console.log("Data:", req.body);

    const nouveauRendezVous = new RendezVous(req.body);
    await nouveauRendezVous.save();

    console.log("Saved to database successfully!");

    res.json({
      message: "Rendez-vous enregistré avec succès dans la base de données !",
    });
  } catch (error) {
    console.error("Error saving to database:", error);
    res.status(500).json({ message: "Erreur lors de l'enregistrement." });
  }
});

// 4. Route جلب المواعيد للـ Admin (GET)
app.get("/api/roundez", async (req, res) => {
  try {
    const liste = await RendezVous.find().sort({ createdAt: -1 });
    res.json(liste);
  } catch (error) {
    console.error("Error fetching data:", error);
    res
      .status(500)
      .json({ message: "Erreur serveur lors de la récupération." });
  }
});

// 5. تشغيل السيرفر
app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
module.exports = app;
