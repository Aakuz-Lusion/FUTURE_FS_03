// src/pages/admin/Dashboard.jsx
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useData } from '../../context/DataContext'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { FiUsers, FiDollarSign, FiCalendar, FiShoppingBag } from 'react-icons/fi'

function Dashboard() {
  const { orders, reservations, menuItems } = useData()
  const navigate = useNavigate()

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0)
  const pendingOrders = orders.filter(o => o.status === 'Pending').length
  const todayReservations = reservations.filter(r => r.date === new Date().toISOString().split('T')[0]).length
  
  const categoryData = [...new Set(menuItems.map(i => i.category))].map(cat => ({
    name: cat,
    count: menuItems.filter(i => i.category === cat).length
  }))

  const orderStatusData = [
    { name: 'Pending', value: orders.filter(o => o.status === 'Pending').length },
    { name: 'Preparing', value: orders.filter(o => o.status === 'Preparing').length },
    { name: 'Completed', value: orders.filter(o => o.status === 'Completed').length }
  ].filter(d => d.value > 0)

  const COLORS = ['#ffc107', '#17a2b8', '#28a745']

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth')
    navigate('/admin')
  }

  return (
    <div className="admin-layout">
      <div className="admin-sidebar">
        <h3 style={{ marginBottom: '30px', textAlign: 'center' }}>🍽️ Savoria Admin</h3>
        <Link to="/admin/dashboard" className="active">📊 Dashboard</Link>
        <Link to="/admin/menu">📋 Menu Manager</Link>
        <Link to="/admin/orders">🛒 Orders</Link>
        <Link to="/admin/reservations">📅 Reservations</Link>
        <Link to="/" style={{ marginTop: 'auto' }}>🏠 View Site</Link>
        <button onClick={handleLogout} className="btn-sm btn-delete" style={{ width: '100%', marginTop: '10px' }}>
          Logout
        </button>
      </div>
      
      <div className="admin-main">
        <h1 style={{ marginBottom: '30px' }}>Dashboard Overview</h1>
        
        <div className="stats-grid">
          <div className="stat-card">
            <h3><FiDollarSign style={{ marginRight: '5px' }} /> Total Revenue</h3>
            <div className="stat-value">${totalRevenue.toFixed(2)}</div>
          </div>
          <div className="stat-card">
            <h3><FiShoppingBag style={{ marginRight: '5px' }} /> Total Orders</h3>
            <div className="stat-value">{orders.length}</div>
          </div>
          <div className="stat-card">
            <h3><FiCalendar style={{ marginRight: '5px' }} /> Reservations Today</h3>
            <div className="stat-value">{todayReservations}</div>
          </div>
          <div className="stat-card">
            <h3><FiUsers style={{ marginRight: '5px' }} /> Pending Orders</h3>
            <div className="stat-value">{pendingOrders}</div>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ marginBottom: '20px' }}>Menu by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#e85d04" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ marginBottom: '20px' }}>Order Status</h3>
            {orderStatusData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={orderStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {orderStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p style={{ textAlign: 'center', color: 'var(--gray)' }}>No orders yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard