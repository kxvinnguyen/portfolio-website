import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css';
import { FaGithub, FaExternalLinkAlt, FaSignLanguage, FaChevronDown, FaChevronUp } from 'react-icons/fa';
// Import the ASLingo image from the correct location
import aslingoImage from '../../images/aslingo.jpg';

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const [expandedTech, setExpandedTech] = useState({});
  const projectRefs = useRef([]);
  
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
  
  // 3D tilt effect for project cards
  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');
    
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top;  // y position within the element
      
      // Calculate rotation based on mouse position
      // Convert to percentage of card width/height
      const xRotation = ((y - rect.height / 2) / rect.height) * 10; // -5 to 5 degrees
      const yRotation = ((rect.width / 2 - x) / rect.width) * 10;   // -5 to 5 degrees
      
      // Apply the 3D rotation transform
      card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.transition = 'transform 0.1s ease';
      
      // Add a subtle shadow effect
      card.style.boxShadow = `0 15px 35px rgba(0, 0, 0, 0.3), 0 0 15px rgba(99, 102, 241, 0.3)`;
    };
    
    const handleMouseLeave = (card) => {
      // Reset transform and shadow when mouse leaves
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
      card.style.boxShadow = 'none';
    };
    
    projectCards.forEach(card => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });
    
    return () => {
      projectCards.forEach(card => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
        card.removeEventListener('mouseleave', () => handleMouseLeave(card));
      });
    };
  }, []);
  
  const toggleTechExpand = (projectId) => {
    setExpandedTech(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const projects = [
    {
      id: 1,
      title: 'ASLingo',
      description: 'Award-winning AI-powered ASL educational tool that teaches sign language through interactive practice. Built with TensorFlow for gesture recognition and PyQt5 for the user interface at HackRU 2023, winning first place in the Education Track.',
      details: 'Led a team that built an AI system to recognize American Sign Language gestures with high accuracy. The application generates random words and checks if users correctly spell them in ASL. We trained our own neural network with custom-gathered data and created an intuitive interface that allows users to practice and receive immediate feedback on their signing accuracy.',
      technologies: ['Python', 'TensorFlow', 'Neural Networks', 'PyQt5', 'NumPy', 'Computer Vision'],
      link: 'https://devpost.com/software/aslingo-8a0xqk?_gl=1*1lja991*_gcl_au*NDY3MjA2NzgwLjE3NDE2MjcxMjc.*_ga*MzQzMzkzMTguMTc0MTYyNzEyNw..*_ga_0YHJK3Y10M*MTc0MTYyNzEyNy4xLjEuMTc0MTYyNzE5Mi4wLjAuMA..',
      github: 'https://github.com/JRusso64/HackRU23',
      featured: true,
      image: aslingoImage,
    },
    {
      id: 2,
      title: 'Worker-Node - Distributed Task Orchestration System',
      description: 'Intelligent workload distribution system that automatically assigns computing tasks across multiple servers for optimal performance. Engineered with fault tolerance to prevent work loss and horizontal scaling to handle growing workloads.',
      details: 'Designed and implemented a distributed system for coordinating computational jobs with fault tolerance mechanisms. Developed a custom scheduler algorithm that intelligently distributes workloads based on node capacity and job requirements, resulting in 35% higher throughput.',
      technologies: ['Golang', 'REST', 'Kafka', 'Docker', 'Kubernetes', 'Prometheus'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'AWS Snowflake Kinesis Airflow Pipeline',
      description: 'End-to-end data pipeline that captures, processes, and stores streaming data for business analytics. Combines AWS Kinesis for real-time data collection with Snowflake for powerful data storage and Airflow for reliable workflow orchestration.',
      details: 'Designed and implemented a serverless ETL pipeline using AWS Kinesis for real-time data ingestion, Airflow for orchestration, and Snowflake for data warehousing. Implemented data validation and error handling to ensure data integrity throughout the pipeline.',
      technologies: ['Python', 'AWS Kinesis', 'Apache Airflow', 'Snowflake', 'Terraform', 'Docker'],
      link: '#',
      github: 'https://github.com/kxvinnguyen/aws-snowflake-kinesis-airflow-pipeline',
    },
    {
      id: 4,
      title: 'Low Hold Monitor',
      description: 'Automated inventory management solution that prevents stockouts by tracking product levels across multiple warehouses. Uses predictive analytics to identify critical stock thresholds and alert management before shortages impact customers.',
      details: 'Developed a Python-based monitoring system that automatically tracks inventory levels across multiple warehouses. Implemented alert mechanisms for low stock situations and generated detailed reports for inventory management teams.',
      technologies: ['Python', 'Pandas', 'Data Analysis', 'Visualization', 'Automation'],
      link: '#',
      github: 'https://github.com/kxvinnguyen/lowhold_monitor',
    },
    {
      id: 5,
      title: 'E-Commerce Product Monitor',
      description: 'Market intelligence tool that automatically identifies trending products across multiple E-Commerce platforms. Combines web scraping and data analysis to provide actionable insights for product sourcing and marketing decisions.',
      details: 'Designed and deployed during my internship at Ellipse, this tool identified 15+ trending items monthly for market research. Improved data collection accuracy by 20% and enabled real-time insights for stakeholders, contributing to a 10% increase in sales for trending products.',
      technologies: ['Python', 'Selenium', 'Data Analysis', 'Web Scraping', 'Automation'],
      link: '#',
      github: '#',
    }
  ];

  return (
    <div className={`portfolio-container glass-background ${visible ? 'fade-in' : ''}`} id="projects">
      <div className="section-heading animate-on-scroll">
        <h1 className="section-title">My Projects</h1>
        <p className="section-subheading">Showcasing my skills through real-world applications</p>
      </div>
      
      {/* Featured Project */}
      {projects.filter(project => project.featured).map(featuredProject => (
        <div key={featuredProject.id} className="featured-project animate-on-scroll">
          <div className="featured-label">Featured Project</div>
          <div className="featured-content">
            <div className="featured-text">
              <h3>{featuredProject.title}</h3>
              <p className="featured-description">
                {featuredProject.description}
              </p>
              <p className="featured-details">
                {featuredProject.details}
              </p>
              <div className="featured-tech">
                {featuredProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {featuredProject.github && featuredProject.github !== '#' && (
                  <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="project-icon-link">
                    <FaGithub /> GitHub
                  </a>
                )}
                {featuredProject.link && featuredProject.link !== '#' && (
                  <a href={featuredProject.link} target="_blank" rel="noopener noreferrer" className="project-icon-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
            <div className="featured-image">
              {featuredProject.image ? (
                <img src={featuredProject.image} alt={featuredProject.title} className="project-image" style={{ maxHeight: '250px' }} />
              ) : (
                <div className="image-placeholder">
                  <FaSignLanguage size={80} />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      
      {/* Other Projects */}
      <h3 className="other-projects-title animate-on-scroll">Other Projects</h3>
      <div className="projects-grid">
        {projects.filter(project => !project.featured).map(project => (
          <div key={project.id} className="project-card glass-card animate-on-scroll" ref={(el) => (projectRefs.current[project.id - 1] = el)}>
            <div className="project-header">
              <div className="project-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="project-links">
                {project.github && project.github !== '#' && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-link">
                    <FaGithub />
                  </a>
                )}
                {project.link && project.link !== '#' && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-icon-link">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {expandedTech[project.id] 
                ? project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))
                : project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))
              }
              {project.technologies.length > 4 && (
                <span 
                  className="tech-tag tech-expand" 
                  onClick={() => toggleTechExpand(project.id)}
                >
                  {expandedTech[project.id] 
                    ? <><FaChevronUp size={10} className="expand-icon" /> Show Less</> 
                    : <><FaChevronDown size={10} className="expand-icon" /> +{project.technologies.length - 4} more</>}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="projects-cta">
        <p>Want to see more of my work? Check out my GitHub profile:</p>
        <a href="https://github.com/kxvinnguyen" target="_blank" rel="noopener noreferrer" className="btn">
          <FaGithub /> View GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default Projects; 