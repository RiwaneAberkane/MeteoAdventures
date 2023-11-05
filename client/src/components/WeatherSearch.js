import React, { useState } from "react";
import "./WeatherSearch.css";

function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/weather?location=${city}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données météo :",
        error
      );
    }
  };

  const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  };

  return (
    <div className="weatherSearch">
      <div className="weatherSearch-top">
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            id="inputCity"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          />
        </div>
        <button onClick={handleSearch} className="btn btn-primary mb-2">
          Rechercher la météo
        </button>
      </div>
      {weatherData && (
        <div className="information">
          <h2>Météo pour {weatherData.name}</h2>
          <p>{weatherData.weather[0].main}</p>
          {/* Affichage de l'icône météo */}
          {weatherData.weather && weatherData.weather[0].icon && (
            <img
              src={getWeatherIconUrl(weatherData.weather[0].icon)}
              alt="Weather Icon"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default WeatherSearch;
