import React from "react";
import "./Navbar.css"; // Import du fichier CSS pour les styles
import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-right">
        <div className="app-name">Meteo.Adventures</div>
        <div className="by-riwane">by Riwane</div>
      </div>
    </div>
  );
};

export default Navbar;
