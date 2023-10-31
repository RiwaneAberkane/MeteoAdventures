// Utilisation d'Axios pour faire un appel API
const axios = require("axios");

const fetchWeatherData = async (location) => {
  const API_KEY = "YOUR_API_KEY";
  const API_URL = `https://api.example.com/weather?location=${location}&apiKey=${API_KEY}`; //$$$$$$$$$$$

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
