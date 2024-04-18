import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <h1>My website</h1>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
          <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
          <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
