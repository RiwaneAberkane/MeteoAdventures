const axios = require("axios");
const config = require("../../config"); // Chemin du fichier de configuration

const fetchWeatherData = async (req, res) => {
  const { location } = req.query;

  const API_KEY = config.API_KEY; // Utilisation de la clé d'API depuis le fichier de configuration
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des données météo" });
  }
};
module.exports = {
  fetchWeatherData,
};
