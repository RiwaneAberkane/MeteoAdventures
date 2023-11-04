import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import WeatherSearch from "./components/WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <WeatherSearch />
      </header>
    </div>
  );
}

export default App;
