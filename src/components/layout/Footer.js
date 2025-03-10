import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0d1117" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,192C672,213,768,235,864,234.7C960,235,1056,213,1152,202.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="footer-content">
        <div className="footer-section brand-section">
          <div className="footer-brand">
            <span className="animated-gradient-text">KN</span>
          </div>
          <h3>Kevin Nguyen</h3>
          <p>Software Engineer & Full Stack Developer</p>
          <div className="footer-social">
            <a href="https://github.com/kxvinnguyen" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/kevinl-nguyen/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:kevinnnguyen5@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="footer-contact">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Hazlet, NJ 07730</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>kevinnnguyen5@gmail.com</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>732-829-9921</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {year} Kevin Nguyen. All rights reserved.</p>
        <p className="tech-mention">Built with <i className="fas fa-heart"></i> using React</p>
      </div>
    </footer>
  );
};

export default Footer; 