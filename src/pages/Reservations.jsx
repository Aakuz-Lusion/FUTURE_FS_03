// src/pages/Reservations.jsx
import React, { useState } from 'react'
import { useData } from '../context/DataContext'

function Reservations() {
  const { addReservation } = useData()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addReservation(form)
    alert('Reservation confirmed! Check your email for details.')
    setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2', specialRequests: '' })
  }

  return (
    <div className="reservations-page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '48px' }}>Make a Reservation</h1>
          <p style={{ color: 'var(--gray)', fontSize: '18px' }}>Book your table at Savoria</p>
        </div>
        
        <div className="reservation-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input type="tel" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Date *</label>
                <input type="date" required value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Time *</label>
                <select required value={form.time} onChange={e => setForm({...form, time: e.target.value})}>
                  <option value="">Select time</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label>Number of Guests *</label>
              <select required value={form.guests} onChange={e => setForm({...form, guests: e.target.value})}>
                {[1,2,3,4,5,6,7,8].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label>Special Requests</label>
              <textarea rows="3" value={form.specialRequests} onChange={e => setForm({...form, specialRequests: e.target.value})}></textarea>
            </div>
            
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reservations