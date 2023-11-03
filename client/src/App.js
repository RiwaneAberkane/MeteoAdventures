import "./App.css";
import React from "react";
import WeatherSearch from "./components/WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherSearch />
      </header>
    </div>
  );
}

export default App;
