// src/pages/admin/AdminLogin.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      sessionStorage.setItem('adminAuth', 'true')
      navigate('/admin/dashboard')
    } else {
      setError('Invalid credentials. Use admin/admin123')
    }
  }

  return (
    <div className="admin-login">
      <div className="admin-login-card">
        <h2>🔐 Admin Login</h2>
        {error && <p style={{ color: 'var(--danger)', textAlign: 'center', marginBottom: '15px' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              value={credentials.username}
              onChange={e => setCredentials({...credentials, username: e.target.value})}
              required 
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={credentials.password}
              onChange={e => setCredentials({...credentials, password: e.target.value})}
              required 
            />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            Login
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '15px', color: 'var(--gray)', fontSize: '13px' }}>
          Demo: admin / admin123
        </p>
      </div>
    </div>
  )
}

export default AdminLogin