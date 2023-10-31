const weatherService = require("../services/weatherService");

const getWeather = async (req, res) => {
  try {
    const data = await weatherService.fetchWeatherData(req.query.location);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getWeather,
};
