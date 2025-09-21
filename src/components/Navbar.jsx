import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/destinations" 
              className={`navbar-link ${isActive('/destinations') ? 'active' : ''}`}
            >
              Destinations
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/about" 
              className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/contact" 
              className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
