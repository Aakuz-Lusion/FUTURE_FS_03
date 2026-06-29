// src/pages/Menu.jsx
import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import { useCart } from '../context/CartContext'

function Menu() {
  const { menuItems } = useData()
  const { dispatch } = useCart()
  const [activeCategory, setActiveCategory] = useState('All')
  
  const categories = ['All', ...new Set(menuItems.map(item => item.category))]
  
  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="menu-page">
      <div className="container">
        <div className="menu-header">
          <h1>Our Menu</h1>
          <p>Discover our carefully crafted dishes</p>
        </div>
        
        <div className="menu-categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="dish-card">
              <img src={item.image} alt={item.name} className="dish-image" />
              <div className="dish-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span style={{ display: 'inline-block', background: 'var(--light)', padding: '4px 12px', borderRadius: '15px', fontSize: '12px', marginBottom: '10px' }}>
                  {item.category}
                </span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="dish-price">${item.price.toFixed(2)}</span>
                  <button 
                    className="btn-primary" 
                    style={{ padding: '8px 20px', fontSize: '14px' }}
                    onClick={() => dispatch({ type: 'ADD_ITEM', payload: item })}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu