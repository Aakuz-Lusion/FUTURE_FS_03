// src/pages/About.jsx
import React from 'react'
import { FiHeart, FiUsers, FiAward, FiCoffee } from 'react-icons/fi'

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1>Our Story</h1>
          <p style={{ color: 'var(--gray)', fontSize: '18px' }}>A passion for exceptional dining since 2010</p>
        </div>
        
        <div className="about-story">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600" 
            alt="Restaurant interior" 
            className="about-image"
          />
          <div className="about-text">
            <h2>Crafting Memories Through Food</h2>
            <p>
              Founded in 2010 by Chef Marco Vittorio, Savoria began as a small neighborhood bistro with a big dream. 
              Today, it stands as one of the city's most beloved dining destinations, known for its innovative cuisine 
              and warm hospitality.
            </p>
            <p>
              Every dish we serve tells a story—of tradition, creativity, and the finest ingredients sourced from 
              around the world. Our team of passionate chefs works tirelessly to create menus that surprise and delight.
            </p>
          </div>
        </div>
        
        <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '40px' }}>Our Values</h2>
        <div className="values-grid">
          <div className="feature-card">
            <div className="feature-icon"><FiHeart /></div>
            <h3>Passion</h3>
            <p>We put our heart into every dish we create</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FiAward /></div>
            <h3>Excellence</h3>
            <p>Committed to the highest standards of quality</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FiUsers /></div>
            <h3>Community</h3>
            <p>Building connections through shared meals</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FiCoffee /></div>
            <h3>Innovation</h3>
            <p>Constantly evolving our culinary artistry</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About