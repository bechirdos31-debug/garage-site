const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
const rendezVousSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  pre: { type: String, required: true },
  telephone: { type: String, required: true },
  services: { type: String, required: true },
  date: { type: String, required: true },
  heure: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const RendezVous =
  mongoose.models.RendezVous || mongoose.model("RendezVous", rendezVousSchema);
app.post("/api/roundez", async (req, res) => {
  try {
    console.log("=== NEW RENDEZ-VOUS ===");
    console.log(req.body);
    const nouveauRendezVous = new RendezVous({
      nom: req.body.nom,
      pre: req.body.pre,
      telephone: req.body.telephone,
      services: req.body.services,
      date: req.body.date,
      heure: req.body.heure,
    });
    await nouveauRendezVous.save();
    console.log("Rendez-vous saved successfully!");
    res
      .status(201)
      .json({ success: true, message: "Rendez-vous enregistré avec succès !" });
  } catch (error) {
    console.error("Error saving rendez-vous:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de l'enregistrement du rendez-vous.",
      error: error.message,
    });
  }
});
app.get("/api/roundez", async (req, res) => {
  try {
    const liste = await RendezVous.find().sort({ createdAt: -1 });
    res.status(200).json(liste);
  } catch (error) {
    console.error("Error fetching rendez-vous:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération des rendez-vous.",
      error: error.message,
    });
  }
});
app.get("/api/test", (req, res) => {
  res.json({ success: true, message: "Server fonctionne correctement !" });
});
module.exports = app;
