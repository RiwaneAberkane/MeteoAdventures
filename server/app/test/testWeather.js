const weatherService = require("../services/weatherService");
// Utilisation de la fonction fetchWeatherData pour obtenir les données météorologiques pour Paris
weatherService
  .fetchWeatherData("Paris")
  .then((weatherData) => {
    console.log("Données météorologiques pour Paris :", weatherData);
    // Faites quelque chose avec les données météorologiques récupérées
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données météo :", error);
  });
