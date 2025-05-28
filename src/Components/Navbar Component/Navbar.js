import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <header className="navbar">
       <Link to="/">
        <img src='/images/logo.png' alt="LinkUp Logo" className="logo" />
        </Link>
      
      <nav className="navbar__links">
        <a><Link to="/managed-accounts">Managed Accounts</Link></a>
        <a><Link to="/affiliates">For Affiliates</Link></a>
        <a><Link to="/about">About Us</Link></a>
        <a><Link to="/contact">Contact Us</Link></a>
      </nav>

      <div className="navbar__actions">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in" />
        </a>
        <Link to="/login"><button className="platform-btn">To the Platform</button></Link>
      </div>
    </header>
  );
};

export default Navbar;
