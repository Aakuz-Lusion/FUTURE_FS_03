// src/pages/admin/OrdersManager.jsx
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useData } from '../../context/DataContext'

function OrdersManager() {
  const { orders, updateOrderStatus } = useData()
  const navigate = useNavigate()

  const statusColors = {
    'Pending': '#ffc107',
    'Preparing': '#17a2b8',
    'Ready': '#28a745',
    'Completed': '#6c757d',
    'Cancelled': '#dc3545'
  }

  return (
    <div className="admin-layout">
      <div className="admin-sidebar">
        <h3 style={{ marginBottom: '30px', textAlign: 'center' }}>🍽️ Savoria Admin</h3>
        <Link to="/admin/dashboard">📊 Dashboard</Link>
        <Link to="/admin/menu">📋 Menu Manager</Link>
        <Link to="/admin/orders" className="active">🛒 Orders</Link>
        <Link to="/admin/reservations">📅 Reservations</Link>
        <Link to="/">🏠 View Site</Link>
        <button onClick={() => { sessionStorage.removeItem('adminAuth'); navigate('/admin') }} className="btn-sm btn-delete" style={{ width: '100%', marginTop: '10px' }}>
          Logout
        </button>
      </div>
      
      <div className="admin-main">
        <h1>Orders ({orders.length})</h1>
        
        {orders.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--gray)', marginTop: '50px' }}>No orders yet</p>
        ) : (
          <table className="data-table">
            <thead>
              <tr><th>Order #</th><th>Items</th><th>Total</th><th>Date</th><th>Status</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td><strong>{order.orderNumber}</strong></td>
                  <td>{order.items.map(i => `${i.name} x${i.quantity}`).join(', ')}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>{new Date(order.date).toLocaleDateString()}</td>
                  <td>
                    <span style={{ 
                      background: statusColors[order.status], 
                      color: 'white', 
                      padding: '4px 12px', 
                      borderRadius: '15px', 
                      fontSize: '12px' 
                    }}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <select 
                      value={order.status} 
                      onChange={e => updateOrderStatus(order.id, e.target.value)}
                      style={{ padding: '5px', borderRadius: '5px' }}
                    >
                      <option>Pending</option>
                      <option>Preparing</option>
                      <option>Ready</option>
                      <option>Completed</option>
                      <option>Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default OrdersManager