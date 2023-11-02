const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Port sur lequel le serveur écoutera
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors()); // Activer CORS pour toutes les requêtes

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Biomarket application." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀🚀🚀`);
});

// ----------------------------------------------------------------
const weatherRouter = require("./app/routes/weather.routes");

// ----------------------------------------------------------------
app.use("/api/weather", weatherRouter);
