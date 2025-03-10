import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    
    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close menu when location changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-brand">
            <Link to="/">
              <span className="animated-gradient-text">Kevin Nguyen</span>
            </Link>
          </div>
          
          <ul className={`navbar-nav navbar-nav-left`}>
            <li className="nav-item">
              <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}>Projects</Link>
            </li>
          </ul>
        </div>
        
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <ul className={`navbar-nav navbar-nav-right`}>
          {isAuthenticated ? (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'nav-link active' : 'nav-link'}>Dashboard</Link>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="btn-link">Logout</button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="btn-nav">Login</Link>
            </li>
          )}
        </ul>
        
        {/* Mobile menu that appears when menu is toggled */}
        {menuOpen && (
          <ul className="navbar-nav active">
            <li className="nav-item">
              <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}>Projects</Link>
            </li>
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'nav-link active' : 'nav-link'}>Dashboard</Link>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout} className="btn-link">Logout</button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="btn-nav">Login</Link>
              </li>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 