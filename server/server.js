const express = require("express");
const rateLimit = require("express-rate-limit");

const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./lib/db");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limiter à 100 requêtes
  message: "Trop de requêtes, veuillez réessayer plus tard",
});

// Middleware
app.use(limiter);
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/appointments", require("./routes/appointmentRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
