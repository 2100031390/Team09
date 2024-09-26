import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Add CSS to style the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Portfolio Builder</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/templates">Templates</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
