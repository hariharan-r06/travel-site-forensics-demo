import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Tourist Explorer</h3>
            <p className="footer-description">
              Your gateway to discovering amazing destinations around the world.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/destinations">Destinations</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <p className="footer-contact">
              Email: info@touristexplorer.com<br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Tourist Explorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
