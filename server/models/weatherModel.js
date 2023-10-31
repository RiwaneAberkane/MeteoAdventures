// Exemple de modèle pour stocker localement les données météorologiques
// Ce modèle peut être adapté en fonction des données que je souhaite stocker localement

let weatherData = {}; // Stockage temporaire des données

const saveWeatherData = (data) => {
  weatherData = data;
};

const getWeatherData = () => {
  return weatherData;
};

module.exports = {
  saveWeatherData,
  getWeatherData,
};
