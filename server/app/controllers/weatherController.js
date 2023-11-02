const { fetchWeatherData } = require("../services/weatherService");

const getWeather = async (req, res) => {
  try {
    console.log(req.query.location);
    const data = await fetchWeatherData(req.query.location);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getWeather,
};


