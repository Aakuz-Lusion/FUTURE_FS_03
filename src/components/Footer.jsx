// src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h3>Savoria</h3>
          <p style={{ color: '#bbb', lineHeight: '1.8' }}>
            Experience exceptional dining with our carefully crafted menu, warm ambiance, and impeccable service.
          </p>
        </div>
        
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/reservations">Make Reservation</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Contact Info</h3>
          <ul>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FiMapPin /> 123 Gourmet Street, Foodie City
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FiPhone /> (555) 123-4567
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FiMail /> info@savoria.com
            </li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Opening Hours</h3>
          <ul>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FiClock /> Mon-Thu: 11:00 AM - 10:00 PM
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FiClock /> Fri-Sat: 11:00 AM - 11:00 PM
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FiClock /> Sunday: 12:00 PM - 9:00 PM
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Savoria Restaurant. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer