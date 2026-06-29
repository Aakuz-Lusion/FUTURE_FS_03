// src/components/Cart.jsx
import React from 'react'
import { useCart } from '../context/CartContext'
import { useData } from '../context/DataContext'
import { FiX, FiTrash2, FiPlus, FiMinus } from 'react-icons/fi'

function Cart({ isOpen, onClose }) {
  const { items, totalPrice, dispatch } = useCart()
  const { addOrder } = useData()

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Cart is empty!')
      return
    }
    
    const order = {
      items: [...items],
      total: totalPrice,
      customerName: 'Guest Customer',
      customerEmail: 'guest@example.com'
    }
    
    const newOrder = addOrder(order)
    alert(`Order placed successfully! Order #${newOrder.orderNumber}`)
    dispatch({ type: 'CLEAR_CART' })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart ({items.length})</h2>
          <button className="cart-close" onClick={onClose}><FiX /></button>
        </div>
        
        <div className="cart-items">
          {items.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--gray)', marginTop: '50px' }}>
              Your cart is empty
            </p>
          ) : (
            items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <div className="cart-quantity">
                    <button onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } })
                      } else {
                        dispatch({ type: 'REMOVE_ITEM', payload: item.id })
                      }
                    }}>
                      <FiMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 } })}>
                      <FiPlus />
                    </button>
                  </div>
                </div>
                <button 
                  style={{ background: 'none', border: 'none', color: 'var(--danger)', cursor: 'pointer', alignSelf: 'flex-start' }}
                  onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>
        
        {items.length > 0 && (
          <div className="cart-total">
            <h3>Total: <span>${totalPrice.toFixed(2)}</span></h3>
            <button className="btn-primary" style={{ width: '100%', marginTop: '15px' }} onClick={handleCheckout}>
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart