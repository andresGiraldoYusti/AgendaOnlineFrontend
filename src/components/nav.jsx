import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Calendario Web</div>
        <ul className="navbar-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/event">Evento</Link></li>
          <li><Link to="/routine">Rutina</Link></li>
          <li><Link to= "/">Cerrar sesion</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
