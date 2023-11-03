const fetchWeatherData = async (location) => {
  try {
    const API_KEY = process.env.API_KEY; // Utilisation de la clé d'API depuis le fichier de configuration
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
    const response = await fetch(API_URL);
    console.log(response);
    return response;
  } catch (error) {
    return "FUCK SHIT";
  }
};
module.exports = {
  fetchWeatherData,
};
