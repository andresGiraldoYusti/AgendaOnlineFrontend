import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
import { useAuth } from '../auth/AuthProvider';


const Navbar = () => {
  
  const { logout } = useAuth();

  const handleCerrarSesion = () => {
    logout();
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Calendario Web</div>
        <ul className="navbar-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/event">Evento</Link></li>
          <li><Link to="/routine">Rutina</Link></li>
          <li><Link to= "/" onClick={handleCerrarSesion}>Cerrar sesion</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
