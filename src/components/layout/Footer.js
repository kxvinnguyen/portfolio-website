import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Kevin Nguyen</h3>
          <p>Portfolio & Job Application Tracker</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: your.email@example.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} Kevin Nguyen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 