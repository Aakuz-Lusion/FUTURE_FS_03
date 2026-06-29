// src/pages/admin/MenuManager.jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useData } from '../../context/DataContext'

function MenuManager() {
  const { menuItems, addMenuItem, updateMenuItem, deleteMenuItem } = useData()
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({ name: '', category: 'Mains', price: '', description: '', image: '', popular: false })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editing) {
      updateMenuItem(editing, { ...form, price: parseFloat(form.price) })
      setEditing(null)
    } else {
      addMenuItem({ ...form, price: parseFloat(form.price) })
    }
    setForm({ name: '', category: 'Mains', price: '', description: '', image: '', popular: false })
  }

  const handleEdit = (item) => {
    setEditing(item.id)
    setForm({ name: item.name, category: item.category, price: item.price.toString(), description: item.description, image: item.image, popular: item.popular })
  }

  return (
    <div className="admin-layout">
      <div className="admin-sidebar">
        <h3 style={{ marginBottom: '30px', textAlign: 'center' }}>🍽️ Savoria Admin</h3>
        <Link to="/admin/dashboard">📊 Dashboard</Link>
        <Link to="/admin/menu" className="active">📋 Menu Manager</Link>
        <Link to="/admin/orders">🛒 Orders</Link>
        <Link to="/admin/reservations">📅 Reservations</Link>
        <Link to="/">🏠 View Site</Link>
        <button onClick={() => { sessionStorage.removeItem('adminAuth'); navigate('/admin') }} className="btn-sm btn-delete" style={{ width: '100%', marginTop: '10px' }}>
          Logout
        </button>
      </div>
      
      <div className="admin-main">
        <h1>Menu Manager</h1>
        
        <div style={{ background: 'white', padding: '25px', borderRadius: '12px', marginBottom: '30px', boxShadow: 'var(--shadow)' }}>
          <h3>{editing ? 'Edit Item' : 'Add New Item'}</h3>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
            <input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
            <select value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
              <option>Starters</option><option>Mains</option><option>Desserts</option><option>Beverages</option>
            </select>
            <input type="number" step="0.01" placeholder="Price" value={form.price} onChange={e => setForm({...form, price: e.target.value})} required />
            <input placeholder="Image URL" value={form.image} onChange={e => setForm({...form, image: e.target.value})} />
            <input placeholder="Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} style={{ gridColumn: '1 / -1' }} />
            <label><input type="checkbox" checked={form.popular} onChange={e => setForm({...form, popular: e.target.checked})} /> Popular</label>
            <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '10px' }}>
              <button type="submit" className="btn-primary">{editing ? 'Update' : 'Add'} Item</button>
              {editing && <button type="button" className="btn-secondary" style={{ color: 'var(--dark)' }} onClick={() => { setEditing(null); setForm({ name: '', category: 'Mains', price: '', description: '', image: '', popular: false }) }}>Cancel</button>}
            </div>
          </form>
        </div>
        
        <table className="data-table">
          <thead>
            <tr><th>Image</th><th>Name</th><th>Category</th><th>Price</th><th>Popular</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {menuItems.map(item => (
              <tr key={item.id}>
                <td><img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} /></td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.popular ? '⭐' : '-'}</td>
                <td>
                  <button className="btn-sm btn-edit" onClick={() => handleEdit(item)}>Edit</button>
                  <button className="btn-sm btn-delete" onClick={() => deleteMenuItem(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MenuManager