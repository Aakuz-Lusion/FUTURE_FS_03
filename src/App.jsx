// src/App.jsx
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import Reservations from './pages/Reservations'
import Gallery from './pages/Gallery'
import OrderOnline from './pages/OrderOnline'
import AdminLogin from './pages/admin/AdminLogin'
import Dashboard from './pages/admin/Dashboard'
import MenuManager from './pages/admin/MenuManager'
import OrdersManager from './pages/admin/OrdersManager'
import ReservationsManager from './pages/admin/ReservationsManager'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="app">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/menu" element={
            <ProtectedRoute>
              <MenuManager />
            </ProtectedRoute>
          } />
          <Route path="/admin/orders" element={
            <ProtectedRoute>
              <OrdersManager />
            </ProtectedRoute>
          } />
          <Route path="/admin/reservations" element={
            <ProtectedRoute>
              <ReservationsManager />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Footer />
    </div>
  )
}

export default App