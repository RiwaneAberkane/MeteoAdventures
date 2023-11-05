import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="weather-card">
      <h2>Météo pour {weatherData.name}</h2>
      <p>{weatherData.weather[0].main}</p>
      {weatherData.weather && weatherData.weather[0].icon && (
        <img
          src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt="Weather Icon"
        />
      )}
    </div>
  );
};

export default WeatherCard;
