import "./App.css";
import React, { useState } from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
        <WeatherSearch setWeatherData={setWeatherData} />
        <WeatherDisplay weatherData={weatherData} />
      </header>
    </div>
  );
}

export default App;
