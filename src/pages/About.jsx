import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <div className="container">
          <h1 className="page-title">About Tourist Explorer</h1>
          <p className="page-subtitle">
            Your trusted companion for discovering the world's most amazing destinations
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          <section className="about-section">
            <div className="about-text">
              <h2 className="section-title">Our Mission</h2>
              <p className="section-description">
                At Tourist Explorer, we believe that travel has the power to transform lives, 
                broaden perspectives, and create lasting memories. Our mission is to make 
                world-class travel accessible to everyone by providing comprehensive, 
                reliable, and inspiring destination information.
              </p>
              <p className="section-description">
                We curate the best destinations, share insider tips, and help you plan 
                unforgettable journeys that suit your interests, budget, and travel style. 
                Whether you're a seasoned traveler or planning your first adventure, 
                we're here to guide you every step of the way.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop" 
                alt="Travel exploration" 
              />
            </div>
          </section>

          <section className="about-section reverse">
            <div className="about-text">
              <h2 className="section-title">What We Offer</h2>
              <ul className="features-list">
                <li className="feature-item">
                  <span className="feature-icon">🗺️</span>
                  <div className="feature-content">
                    <h3>Comprehensive Destination Guides</h3>
                    <p>Detailed information about attractions, activities, and local culture</p>
                  </div>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">📸</span>
                  <div className="feature-content">
                    <h3>Stunning Visual Content</h3>
                    <p>High-quality images and videos to inspire your next trip</p>
                  </div>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">💡</span>
                  <div className="feature-content">
                    <h3>Expert Travel Tips</h3>
                    <p>Insider knowledge from experienced travelers and local experts</p>
                  </div>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <div className="feature-content">
                    <h3>Personalized Recommendations</h3>
                    <p>Tailored suggestions based on your interests and preferences</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=400&fit=crop" 
                alt="Travel planning" 
              />
            </div>
          </section>

          <section className="stats-section">
            <h2 className="section-title">Our Impact</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Destinations</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1M+</div>
                <div className="stat-label">Travelers Helped</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Countries Covered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.9</div>
                <div className="stat-label">User Rating</div>
              </div>
            </div>
          </section>

          <section className="team-section">
            <h2 className="section-title">Our Team</h2>
            <p className="section-description">
              We're a passionate team of travel enthusiasts, photographers, writers, 
              and technology experts who share a common love for exploration and discovery. 
              Our diverse backgrounds and experiences allow us to provide you with 
              authentic, well-researched, and inspiring travel content.
            </p>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Team member" />
                </div>
                <h3 className="member-name">Alex Johnson</h3>
                <p className="member-role">Founder & CEO</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="Team member" />
                </div>
                <h3 className="member-name">Sarah Chen</h3>
                <p className="member-role">Head of Content</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Team member" />
                </div>
                <h3 className="member-name">Michael Rodriguez</h3>
                <p className="member-role">Lead Developer</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
