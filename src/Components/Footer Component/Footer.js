import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo-section">
            <div className="logo">
              Link<span className="up-highlight">UP</span>
            </div>
            <p>Your Link-Building Powerhouse</p>
            <img
              src="/path-to-ahrefs-badge.png"
              alt="Ahrefs Badge"
              className="badge"
            />
          </div>

          <div className="footer-links">
            <div>
              <h4>Company</h4>
              <ul>
                <li>Managed Accounts</li>
                <li>For Affiliates</li>
                <li>For Publishers</li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4>Legals</h4>
              <ul>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>LinkUp Ltd © 2025 All Rights Reserved.</p>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
