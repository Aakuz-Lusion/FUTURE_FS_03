// src/pages/admin/ReservationsManager.jsx
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useData } from '../../context/DataContext'

function ReservationsManager() {
  const { reservations, updateReservationStatus } = useData()
  const navigate = useNavigate()

  return (
    <div className="admin-layout">
      <div className="admin-sidebar">
        <h3 style={{ marginBottom: '30px', textAlign: 'center' }}>🍽️ Savoria Admin</h3>
        <Link to="/admin/dashboard">📊 Dashboard</Link>
        <Link to="/admin/menu">📋 Menu Manager</Link>
        <Link to="/admin/orders">🛒 Orders</Link>
        <Link to="/admin/reservations" className="active">📅 Reservations</Link>
        <Link to="/">🏠 View Site</Link>
        <button onClick={() => { sessionStorage.removeItem('adminAuth'); navigate('/admin') }} className="btn-sm btn-delete" style={{ width: '100%', marginTop: '10px' }}>
          Logout
        </button>
      </div>
      
      <div className="admin-main">
        <h1>Reservations ({reservations.length})</h1>
        
        {reservations.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--gray)', marginTop: '50px' }}>No reservations yet</p>
        ) : (
          <table className="data-table">
            <thead>
              <tr><th>Name</th><th>Email</th><th>Phone</th><th>Date</th><th>Time</th><th>Guests</th><th>Status</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {reservations.map(res => (
                <tr key={res.id}>
                  <td><strong>{res.name}</strong></td>
                  <td>{res.email}</td>
                  <td>{res.phone}</td>
                  <td>{res.date}</td>
                  <td>{res.time}</td>
                  <td>{res.guests}</td>
                  <td>
                    <span style={{ 
                      background: res.status === 'Confirmed' ? '#28a745' : '#dc3545', 
                      color: 'white', 
                      padding: '4px 12px', 
                      borderRadius: '15px', 
                      fontSize: '12px' 
                    }}>
                      {res.status}
                    </span>
                  </td>
                  <td>
                    <select 
                      value={res.status} 
                      onChange={e => updateReservationStatus(res.id, e.target.value)}
                      style={{ padding: '5px', borderRadius: '5px' }}
                    >
                      <option>Confirmed</option>
                      <option>Cancelled</option>
                      <option>Completed</option>
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

export default ReservationsManager