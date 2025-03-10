import React, { useState } from 'react';
import './Portfolio.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { name, email, message } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you'd handle form submission with an actual API endpoint
    console.log('Form submitted:', formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="portfolio-container glass-background" id="contact">
      <div className="section-heading">
        <h1 className="section-title">Contact Me</h1>
        <p className="section-subheading">Let's discuss your project or opportunity</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info glass-card">
          <h3><i className="fas fa-paper-plane"></i> Get In Touch</h3>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          
          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-detail-content">
                <h4>Email</h4>
                <p>kevinnnguyen5@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-detail-content">
                <h4>Location</h4>
                <p>Hazlet, NJ 07730</p>
              </div>
            </div>
          </div>
          
          <h3><i className="fas fa-link"></i> Social Profiles</h3>
          <div className="social-links">
            <a href="https://github.com/kxvinnguyen" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/kevinl-nguyen/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:kevinnnguyen5@gmail.com" className="social-icon">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="contact-form-container glass-card">
          <h3><i className="fas fa-comment-alt"></i> Send a Message</h3>
          {isSubmitted ? (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              <p>Thank you for your message! I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                  required
                  className="input-field"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                  className="input-field"
                  placeholder="Your email address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={onChange}
                  rows="5"
                  required
                  className="input-field"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact; 