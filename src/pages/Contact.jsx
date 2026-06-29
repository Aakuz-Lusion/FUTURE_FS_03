// src/pages/Contact.jsx
import React, { useState } from 'react'
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1 style={{ fontSize: '48px' }}>Contact Us</h1>
          <p style={{ color: 'var(--gray)', fontSize: '18px' }}>We'd love to hear from you</p>
        </div>
        
        <div className="contact-grid">
          <div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="Subject" 
                required 
                value={form.subject}
                onChange={e => setForm({...form, subject: e.target.value})}
              />
              <textarea 
                rows="5" 
                placeholder="Your Message" 
                required 
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
              ></textarea>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                <FiSend style={{ marginRight: '8px' }} /> Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className="contact-info-item">
              <FiMapPin className="contact-info-icon" />
              <div>
                <h4>Address</h4>
                <p style={{ color: 'var(--gray)' }}>123 Gourmet Street<br />Foodie City, FC 12345</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <FiPhone className="contact-info-icon" />
              <div>
                <h4>Phone</h4>
                <p style={{ color: 'var(--gray)' }}>(555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <FiMail className="contact-info-icon" />
              <div>
                <h4>Email</h4>
                <p style={{ color: 'var(--gray)' }}>info@savoria.com</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <FiClock className="contact-info-icon" />
              <div>
                <h4>Hours</h4>
                <p style={{ color: 'var(--gray)' }}>
                  Mon-Thu: 11 AM - 10 PM<br />
                  Fri-Sat: 11 AM - 11 PM<br />
                  Sunday: 12 PM - 9 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact