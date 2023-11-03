const fetchWeatherData = async (location) => {
  try {
    const API_KEY = "1a2947f5e4670c0d7151aa0f488df436";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
    const response = await fetch(API_URL);

    if (response.ok) {
      const data = await response.json(); // Convertit la réponse en format JSON
      return data; // Renvoie les données JSON reçues de l'API
    } else {
      throw new Error("Erreur lors de la récupération des données météo");
    }
  } catch (error) {
    throw new Error("Erreur lors de la récupération des données météo");
  }
};

module.exports = {
  fetchWeatherData,
};
