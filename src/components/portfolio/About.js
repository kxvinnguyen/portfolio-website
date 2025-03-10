import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className={`about-container ${visible ? 'fade-in' : ''}`}>
      <div className="about-header glass-card animate-on-scroll">
        <h1 className="section-title">About Me</h1>
        <div className="about-profile">
          <div className="about-info">
            <h2>Kevin Nguyen</h2>
            <p className="about-location">Hazlet, NJ 07730</p>
            <div className="about-contact">
              <a href="mailto:kevinnnguyen5@gmail.com" className="contact-item">
                <i className="fas fa-envelope"></i> kevinnnguyen5@gmail.com
              </a>
              <a href="tel:7328299921" className="contact-item">
                <i className="fas fa-phone"></i> 732-829-9921
              </a>
              <a href="https://www.linkedin.com/in/kevinl-nguyen/" target="_blank" rel="noopener noreferrer" className="contact-item">
                <i className="fab fa-linkedin"></i> linkedin.com/in/kevinl-nguyen
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-tabs animate-on-scroll">
        <button 
          className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          <i className="fas fa-briefcase"></i> Experience
        </button>
        <button 
          className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          <i className="fas fa-code"></i> Skills
        </button>
        <button 
          className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          <i className="fas fa-graduation-cap"></i> Education
        </button>
      </div>
      
      <div className={`tab-content ${activeTab === 'experience' ? 'active' : ''}`}>
        <div className="about-section glass-card animate-on-scroll">
          <h3 className="section-title">Professional Experience</h3>
          
          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h4>Software Developer Intern</h4>
                <h5>Ellipse</h5>
              </div>
              <div className="experience-period">February 2025 – Present</div>
            </div>
            <p className="experience-location">New York, NY</p>
            <ul className="experience-list">
              <li>Built and maintained high-performance RESTful APIs using Node.js that integrated multiple sales channels, resulting in faster inventory synchronization and improved system reliability.</li>
              <li>Developed data analytics pipelines with Python, SQL, and Pandas that processed over 2TB of customer data monthly, providing actionable insights that increased retention rates by 10%.</li>
              <li>Collaborated with senior engineers to implement containerized microservices using Docker and Kubernetes, reducing page load times by 50% and improving scalability.</li>
            </ul>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h4>Data Science Fellow</h4>
                <h5>Bluebonnet Data</h5>
              </div>
              <div className="experience-period">August 2022 – December 2022</div>
            </div>
            <p className="experience-location">Dallas, TX</p>
            <ul className="experience-list">
              <li>Architected and distributed web scraping application using Python/Selenium that extracted and processed over 100,000 data points daily, improving collection efficiency by 35%.</li>
              <li>Engineered machine learning models with scikit-learn and TensorFlow that achieved 92% prediction accuracy, deploying models via Flask API for production use.</li>
              <li>Led development of a responsive promotional website using Bootstrap and Redux, following modern frontend practices that increased organization visibility by 45%.</li>
            </ul>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h4>Software Engineer Intern</h4>
                <h5>ShopPham</h5>
              </div>
              <div className="experience-period">June 2021 – August 2021</div>
            </div>
            <p className="experience-location">New Brunswick, NJ</p>
            <ul className="experience-list">
              <li>Developed Python automation scripts that leveraged multithreading to streamline 10+ checkout processes on high-traffic e-commerce platforms, reducing manual effort by 40%.</li>
              <li>Designed and implemented ETL pipelines for processing sensitive customer data, ensuring PCI compliance while maintaining processing efficiency.</li>
              <li>Built a real-time monitoring dashboard using Node.js and D3.js that visualized system metrics, enabling quicker identification and resolution of performance bottlenecks.</li>
            </ul>
          </div>
        </div>
        
        <div className="about-section glass-card animate-on-scroll">
          <h3 className="section-title">Research Experience</h3>
          
          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h4>Research Data Assistant</h4>
                <h5>Rutgers Research Thesis</h5>
              </div>
              <div className="experience-period">September 2024 – December 2024</div>
            </div>
            <p className="experience-location">New Brunswick, NJ</p>
            <ul className="experience-list">
              <li>Conducted detailed analysis of complex datasets to identify patterns and trends, demonstrating strong analytical thinking and attention to detail in high-stakes environments.</li>
              <li>Developed predictive models with 88% accuracy, showcasing problem-solving skills and the ability to make data-driven decisions under tight deadlines.</li>
              <li>Designed clear and concise data visualizations to communicate findings effectively.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={`tab-content ${activeTab === 'skills' ? 'active' : ''}`}>
        <div className="about-section glass-card animate-on-scroll">
          <h3 className="section-title">Technical Skills</h3>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h4><i className="fas fa-code"></i> Programming Languages</h4>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">HTML/CSS</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h4><i className="fas fa-database"></i> Data & Analytics</h4>
              <div className="skill-tags">
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">ETL Pipeline Development</span>
                <span className="skill-tag">Data Visualization</span>
                <span className="skill-tag">Excel</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h4><i className="fas fa-chart-bar"></i> Visualization</h4>
              <div className="skill-tags">
                <span className="skill-tag">PowerBI</span>
                <span className="skill-tag">Matplotlib</span>
                <span className="skill-tag">Seaborn</span>
                <span className="skill-tag">D3.js</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h4><i className="fas fa-tools"></i> Tools & Technologies</h4>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">Selenium</span>
                <span className="skill-tag">Azure/AWS</span>
                <span className="skill-tag">System Design</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-section glass-card animate-on-scroll">
          <h3 className="section-title">Functional Skills</h3>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h4><i className="fas fa-chart-line"></i> Data Science</h4>
              <div className="skill-tags">
                <span className="skill-tag">Data Analysis</span>
                <span className="skill-tag">Data Visualization</span>
                <span className="skill-tag">Data Cleaning</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Statistical Analysis</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h4><i className="fas fa-comments"></i> Communication</h4>
              <div className="skill-tags">
                <span className="skill-tag">Stakeholder Communication</span>
                <span className="skill-tag">Technical Documentation</span>
                <span className="skill-tag">Data Storytelling</span>
                <span className="skill-tag">Presentation Skills</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`tab-content ${activeTab === 'education' ? 'active' : ''}`}>
        <div className="about-section glass-card animate-on-scroll">
          <h3 className="section-title">Education</h3>
          
          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h4>B.S. Computer Science</h4>
                <h5>Rutgers University - New Brunswick</h5>
              </div>
              <div className="experience-period">September 2021 – December 2024</div>
            </div>
            <p className="experience-location">New Brunswick, NJ</p>
            <div className="education-details">
              <p><strong>Relevant Coursework:</strong></p>
              <div className="course-tags">
                <span className="course-tag">Data Structures</span>
                <span className="course-tag">Algorithms</span>
                <span className="course-tag">Machine Learning</span>
                <span className="course-tag">Database Systems</span>
                <span className="course-tag">Software Methodology</span>
                <span className="course-tag">Computer Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-cta">
        <Link to="/projects" className="btn">View My Projects</Link>
      </div>
    </div>
  );
};

export default About; 