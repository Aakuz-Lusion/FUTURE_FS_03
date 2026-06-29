// src/components/ProtectedRoute.jsx
import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const isAuthenticated = sessionStorage.getItem('adminAuth') === 'true'
  
  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />
  }
  
  return children
}

export default ProtectedRoute