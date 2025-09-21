import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    if (!formData.email.includes('@')) {
      setFormStatus('Please enter a valid email address.');
      return;
    }

    // Simulate form submission
    setFormStatus('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Clear status message after 5 seconds
    setTimeout(() => {
      setFormStatus('');
    }, 5000);
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with us for travel advice, suggestions, or any questions you might have
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">Get in Touch</h2>
              <p className="section-description">
                We'd love to hear from you! Whether you have questions about destinations, 
                need travel advice, or want to share your own travel experiences, 
                we're here to help.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h3>Email Us</h3>
                    <p>info@touristexplorer.com</p>
                    <p>support@touristexplorer.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h3>Call Us</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri: 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h3>Visit Us</h3>
                    <p>123 Travel Street</p>
                    <p>Adventure City, AC 12345</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-link">📘</a>
                  <a href="#" className="social-link">📷</a>
                  <a href="#" className="social-link">🐦</a>
                  <a href="#" className="social-link">📺</a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Send us a Message</h2>
                
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell us about your travel plans, questions, or feedback..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                {formStatus && (
                  <div className={`form-status ${formStatus.includes('Thank you') ? 'success' : 'error'}`}>
                    {formStatus}
                  </div>
                )}

                <button type="submit" className="form-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
