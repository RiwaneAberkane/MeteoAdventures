import React, { useState } from "react";

function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/weather?location=${city}`
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données météo :",
        error
      );
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Entrez le nom de la ville"
      />
      <button onClick={handleSearch}>Rechercher la météo</button>

      {weatherData && (
        <div>
          <h2>Météo pour {weatherData.name}</h2>
          <h3>{weatherData.clouds.all}</h3>
          <p>{weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherSearch;
