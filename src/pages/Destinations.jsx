import React from 'react';
import './Destinations.css';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Paris, France",
      description: "The City of Light, famous for its art, fashion, and iconic landmarks like the Eiffel Tower and Louvre Museum.",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop",
      country: "France",
      rating: 4.8
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      description: "A vibrant metropolis blending traditional culture with cutting-edge technology and amazing cuisine.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
      country: "Japan",
      rating: 4.9
    },
    {
      id: 3,
      name: "New York, USA",
      description: "The Big Apple, home to Broadway, Central Park, Times Square, and the Statue of Liberty.",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop",
      country: "United States",
      rating: 4.7
    },
    {
      id: 4,
      name: "Rome, Italy",
      description: "The Eternal City, rich in history with ancient ruins, Vatican City, and world-class Italian cuisine.",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop",
      country: "Italy",
      rating: 4.8
    },
    {
      id: 5,
      name: "London, UK",
      description: "A historic city with royal palaces, world-class museums, and the iconic Big Ben and Tower Bridge.",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
      country: "United Kingdom",
      rating: 4.6
    },
    {
      id: 6,
      name: "Sydney, Australia",
      description: "Australia's largest city, famous for its Opera House, Harbour Bridge, and beautiful beaches.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      country: "Australia",
      rating: 4.7
    },
    {
      id: 7,
      name: "Barcelona, Spain",
      description: "A vibrant city known for its unique architecture, beautiful beaches, and rich cultural heritage.",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop",
      country: "Spain",
      rating: 4.8
    },
    {
      id: 8,
      name: "Dubai, UAE",
      description: "A modern metropolis with luxury shopping, ultramodern architecture, and a vibrant nightlife scene.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
      country: "United Arab Emirates",
      rating: 4.5
    },
    {
      id: 9,
      name: "Bangkok, Thailand",
      description: "A bustling city with ornate temples, floating markets, and world-renowned street food.",
      image: "https://images.unsplash.com/photo-1563492065-1a120d5d8b1b?w=400&h=300&fit=crop",
      country: "Thailand",
      rating: 4.6
    }
  ];

  return (
    <div className="destinations">
      <div className="destinations-header">
        <div className="container">
          <h1 className="page-title">Explore Destinations</h1>
          <p className="page-subtitle">
            Discover amazing places around the world and plan your next adventure
          </p>
        </div>
      </div>

      <div className="destinations-content">
        <div className="container">
          <div className="destinations-grid">
            {destinations.map((destination) => (
              <div key={destination.id} className="destination-card">
                <div className="destination-image">
                  <img src={destination.image} alt={destination.name} />
                  <div className="destination-rating">
                    <span className="rating-star">⭐</span>
                    <span className="rating-value">{destination.rating}</span>
                  </div>
                </div>
                <div className="destination-content">
                  <div className="destination-header">
                    <h3 className="destination-name">{destination.name}</h3>
                    <span className="destination-country">{destination.country}</span>
                  </div>
                  <p className="destination-description">{destination.description}</p>
                  <button className="destination-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
