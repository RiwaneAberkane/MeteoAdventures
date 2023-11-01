import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div>
      {weatherData && (
        <div>
          <h2>Météo pour {weatherData.name}</h2>
          <p>
            Description:{" "}
            {weatherData.weather && weatherData.weather[0].description}
          </p>
          <p>
            Température actuelle: {weatherData.main && weatherData.main.temp}°C
          </p>
          {/* Autres informations météorologiques à afficher */}
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
