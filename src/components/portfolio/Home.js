import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
// Import the ASLingo image
import aslingoImage from '../../images/aslingo.jpg';
// Import the faded code background image
import fadedCodeBg from '../../images/fadedcoded.png';

// Loading/Page Transition Component
const PageTransition = ({ isLoading }) => {
  return (
    <div className={`page-transition ${isLoading ? 'loading' : 'loaded'}`}>
      <div className="loader-wrapper">
        <div className="loader-text">Kevin Nguyen's Portfolio</div>
        <div className="loader-circle"></div>
      </div>
    </div>
  );
};

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [titleText, setTitleText] = useState('');
  const fullTitle = "Software Engineer & Data Scientist";
  const typingRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState({
    first: false,
    second: false,
    third: false
  });
  
  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    // Typing animation
    let index = 0;
    typingRef.current = setInterval(() => {
      if (index < fullTitle.length) {
        setTitleText(fullTitle.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingRef.current);
      }
    }, 100);
    
    // Rest of your useEffect code for animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, { threshold: 0.1 });
    
    const target = document.querySelector('.hero-content');
    if (target) {
      observer.observe(target);
    }
    
    // Staggered animation for skills cards - using functional updates to avoid stale state
    const timer1 = setTimeout(() => 
      setSkillsVisible(prev => ({ ...prev, first: true })), 400);
    const timer2 = setTimeout(() => 
      setSkillsVisible(prev => ({ ...prev, second: true })), 600);
    const timer3 = setTimeout(() => 
      setSkillsVisible(prev => ({ ...prev, third: true })), 800);
    
    // Intersection Observer for scroll animations
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          scrollObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      scrollObserver.observe(el);
    });
    
    return () => {
      if (target) {
        observer.unobserve(target);
      }
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      scrollObserver.disconnect();
      if (typingRef.current) {
        clearInterval(typingRef.current);
      }
    };
  }, []); // Empty dependency array is appropriate here as this should only run once on mount

  return (
    <div className="home-container">
      <PageTransition isLoading={isLoading} />
      <div className="hero-section" style={{
        backgroundImage: `url(${fadedCodeBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        width: '100%',
        maxWidth: '100vw'
      }}>
        <div className="particles-container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="hero-overlay"></div>
        <div className={`hero-content ${visible ? 'visible' : ''}`}>
          <h1>
            <span className="greeting">Hello, I'm</span>
            <span className="name animated-gradient-text">Kevin Nguyen</span>
          </h1>
          <div className="title-container">
            <h2>{titleText}</h2><span className="cursor" aria-hidden="true"></span>
          </div>
          <p className="hero-description">
            I engineer data-driven solutions with Python and modern technologies. Specializing in ETL pipeline development, automation, and machine learning, I build systems that process terabytes of data efficiently. My experience spans web development, data engineering, and AI applications with a focus on scalable architecture and clean code.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="hero-btn">View My Projects</Link>
            <Link to="/about" className="hero-btn">My Experience</Link>
          </div>
          
          <div className="tech-stack-banner">
            <div className="tech-label">Tech Stack:</div>
            <div className="tech-icons">
              <span className="tech-icon" title="React"><i className="fab fa-react"></i></span>
              <span className="tech-icon" title="JavaScript"><i className="fab fa-js"></i></span>
              <span className="tech-icon" title="Node.js"><i className="fab fa-node-js"></i></span>
              <span className="tech-icon" title="HTML5"><i className="fab fa-html5"></i></span>
              <span className="tech-icon" title="CSS3"><i className="fab fa-css3-alt"></i></span>
              <span className="tech-icon" title="MongoDB"><i className="fas fa-database"></i></span>
              <span className="tech-icon" title="Git"><i className="fab fa-git-alt"></i></span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section-heading animate-on-scroll">
        <h2>What I Do</h2>
        <p className="section-subheading">Delivering high-quality solutions across multiple domains</p>
      </div>
      
      <div className="home-grid">
        <div className={`glass-card ${skillsVisible.first ? 'visible' : ''}`}>
          <div className="card-icon">
            <i className="fas fa-laptop-code"></i>
          </div>
          <h3>Software Engineering</h3>
          <p>Architecting scalable, maintainable solutions through thoughtful system design and clean code practices. I specialize in reducing complexity, optimizing performance, and automating workflows to improve operational efficiency by 25-40%.</p>
          <ul className="skill-highlights">
            <li>Object-Oriented Programming</li>
            <li>System Architecture</li>
            <li>CI/CD Pipelines</li>
            <li>Test-Driven Development</li>
          </ul>
        </div>
        
        <div className={`glass-card ${skillsVisible.second ? 'visible' : ''}`}>
          <div className="card-icon">
            <i className="fas fa-database"></i>
          </div>
          <h3>Data Science</h3>
          <p>Transforming raw data into actionable insights through advanced analytics and machine learning. My proven track record includes building predictive models with 88-92% accuracy and developing efficient data extraction tools that improve productivity by 35%.</p>
          <ul className="skill-highlights">
            <li>Machine Learning</li>
            <li>Predictive Modeling</li>
            <li>Web Scraping</li>
            <li>Data Visualization</li>
          </ul>
        </div>
        
        <div className={`glass-card ${skillsVisible.third ? 'visible' : ''}`}>
          <div className="card-icon">
            <i className="fas fa-code"></i>
          </div>
          <h3>Web Development</h3>
          <p>Creating responsive, modern web applications with intuitive user interfaces and robust backends. I focus on performance optimization, accessibility, and cross-browser compatibility to deliver exceptional digital experiences that delight users.</p>
          <ul className="skill-highlights">
            <li>React & Modern JavaScript</li>
            <li>RESTful API Design</li>
            <li>Responsive UI/UX</li>
            <li>Performance Optimization</li>
          </ul>
        </div>
      </div>
      
      {/* Featured Project Section with heading */}
      <div className="section-heading">
        <h2>Featured Project</h2>
      </div>
      
      <div className="featured-project animate-on-scroll">
        <div className="featured-label">Featured Project</div>
        <div className="featured-content">
          <div className="featured-text">
            <h3>ASLingo</h3>
            <p className="featured-description">
              A real-time gesture recognition system with 98% accuracy that translates sign language into text, making communication more accessible for the deaf and hard-of-hearing community.
            </p>
            <div className="featured-tech">
              <span className="tech-tag">Computer Vision</span>
              <span className="tech-tag">Machine Learning</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
            </div>
            <p className="featured-achievement">
              <i className="fas fa-trophy"></i> First Place Winner - Education Track, Rutgers Hackathon 2023
            </p>
            <Link to="/projects" className="btn btn-sm">View All Projects</Link>
          </div>
          <div className="featured-image">
            <img src={aslingoImage} alt="ASLingo Project" className="project-image" style={{ maxHeight: '250px' }} />
          </div>
        </div>
      </div>
      
      <div className="home-cta animate-on-scroll">
        <h2>Let's Build Something Amazing Together</h2>
        <p>Currently open to new opportunities and collaborations. Feel free to reach out at <a href="mailto:kevinnnguyen5@gmail.com" className="email-link">kevinnnguyen5@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Home; 