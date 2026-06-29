// src/pages/Home.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../context/DataContext'
import { useCart } from '../context/CartContext'
import { FiTruck, FiClock, FiAward, FiUsers } from 'react-icons/fi'

function Home() {
  const { menuItems } = useData()
  const { dispatch } = useCart()
  const popularDishes = menuItems.filter(item => item.popular).slice(0, 4)

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span>Savoria</span></h1>
          <p>Where every meal is a masterpiece. Experience culinary excellence in every bite.</p>
          <div>
            <Link to="/reservations" className="btn-primary">Reserve a Table</Link>
            <Link to="/menu" className="btn-secondary">View Menu</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><FiAward /></div>
            <h3>Premium Quality</h3>
            <p>We source only the finest ingredients from local farms and global suppliers.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FiClock /></div>
            <h3>Fast Service</h3>
            <p>Our efficient team ensures your dining experience is smooth and enjoyable.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FiUsers /></div>
            <h3>Expert Chefs</h3>
            <p>Our award-winning chefs bring years of culinary expertise to your plate.</p>
          </div>
        </div>
      </section>

      <section className="popular-dishes">
        <h2>Our <span>Popular</span> Dishes</h2>
        <div className="dishes-grid">
          {popularDishes.map(dish => (
            <div key={dish.id} className="dish-card">
              <img src={dish.image} alt={dish.name} className="dish-image" />
              <div className="dish-info">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="dish-price">${dish.price.toFixed(2)}</span>
                  <button 
                    className="btn-primary" 
                    style={{ padding: '8px 20px', fontSize: '14px' }}
                    onClick={() => dispatch({ type: 'ADD_ITEM', payload: dish })}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/menu" className="btn-primary" style={{ marginTop: '40px' }}>View Full Menu</Link>
      </section>
    </>
  )
}

export default Home