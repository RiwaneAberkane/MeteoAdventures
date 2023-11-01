const axios = require("axios");
const config = require("./config"); // Chemin du fichier de configuration

const fetchWeatherData = async (location) => {
  const API_KEY = config.API_KEY; // Utilisation de la clé d'API depuis le fichier de configuration
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des données météo");
  }
};

module.exports = {
  fetchWeatherData,
};
