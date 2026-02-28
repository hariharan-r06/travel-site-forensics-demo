import React from 'react';
import './Home.css';

const Home = () => {
  const featuredDestinations = [
    {)
      id: 1,
      name: "Paris, France",
      description: "The City of Light, famous for its art, fashion, and iconic landmarks like the Eiffel Tower.",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      description: "A vibrant metropolis blending traditional culture with cutting-edge technology.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "New York, USA",
      description: "The Big Apple, home to Broadway, Central Park, and the Statue of Liberty.",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Welcome to Tourist Explorer</h1>
          <p className="hero-subtitle">
            Discover amazing destinations around the world and plan your next adventure.
            From bustling cities to serene landscapes, we help you explore the beauty of our planet.
          </p>
          <button className="hero-cta">Start Exploring</button>
        </div>
      </section>

      <section className="featured-destinations">
        <div className="container">
          <h2 className="section-title">Featured Destinations</h2>
          <div className="destinations-grid">
            {featuredDestinations.map((destination) => (
              <div key={destination.id} className="destination-card">
                <div className="destination-image">
                  <img src={destination.image} alt={destination.name} />
                </div>
                <div className="destination-content">
                  <h3 className="destination-name">{destination.name}</h3>
                  <p className="destination-description">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Tourist Explorer?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3 className="feature-title">Global Coverage</h3>
              <p className="feature-description">
                Explore destinations from every continent with detailed information and recommendations.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">Easy Planning</h3>
              <p className="feature-description">
                Plan your trips with our user-friendly interface and comprehensive destination guides.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3 className="feature-title">Expert Reviews</h3>
              <p className="feature-description">
                Get insights from travel experts and fellow travelers to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;