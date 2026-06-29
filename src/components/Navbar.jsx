// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'

function Navbar({ onCartClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-icon">🍽️</span>
          Savor<span>ia</span>
        </Link>
        
        <ul className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          <li><Link to="/" className={isActive('/')} onClick={() => setMobileOpen(false)}>Home</Link></li>
          <li><Link to="/menu" className={isActive('/menu')} onClick={() => setMobileOpen(false)}>Menu</Link></li>
          <li><Link to="/about" className={isActive('/about')} onClick={() => setMobileOpen(false)}>About</Link></li>
          <li><Link to="/gallery" className={isActive('/gallery')} onClick={() => setMobileOpen(false)}>Gallery</Link></li>
          <li><Link to="/reservations" className={isActive('/reservations')} onClick={() => setMobileOpen(false)}>Reservations</Link></li>
          <li><Link to="/contact" className={isActive('/contact')} onClick={() => setMobileOpen(false)}>Contact</Link></li>
        </ul>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link to="/order-online" className="cart-btn" style={{ background: 'var(--secondary)', color: 'var(--dark)' }}>
            Order Online
          </Link>
          <button className="cart-btn" onClick={onCartClick}>
            <FiShoppingCart />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </button>
          <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar