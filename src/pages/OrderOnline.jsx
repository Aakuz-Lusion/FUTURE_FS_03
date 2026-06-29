// src/pages/OrderOnline.jsx
import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import { useCart } from '../context/CartContext'

function OrderOnline() {
  const { menuItems } = useData()
  const { dispatch } = useCart()
  const [category, setCategory] = useState('All')
  
  const categories = ['All', ...new Set(menuItems.map(i => i.category))]
  const filtered = category === 'All' ? menuItems : menuItems.filter(i => i.category === category)

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '48px' }}>Order Online</h1>
          <p style={{ color: 'var(--gray)', fontSize: '18px' }}>Delicious food delivered to your doorstep</p>
        </div>
        
        <div className="menu-categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn ${category === cat ? 'active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="menu-grid">
          {filtered.map(item => (
            <div key={item.id} className="dish-card">
              <img src={item.image} alt={item.name} className="dish-image" />
              <div className="dish-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
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

export default OrderOnline