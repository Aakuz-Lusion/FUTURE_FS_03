// src/pages/Gallery.jsx
import React, { useState } from 'react'

const galleryImages = [
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400',
  'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=400',
  'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400',
  'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=400',
  'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400',
  'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400',
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400'
]

function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="gallery-page">
      <div className="container">
        <div className="gallery-header">
          <h1 style={{ fontSize: '48px' }}>Gallery</h1>
          <p style={{ color: 'var(--gray)', fontSize: '18px' }}>A glimpse into the Savoria experience</p>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item" onClick={() => setSelected(img)}>
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      
      {selected && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelected(null)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img 
            src={selected} 
            alt="Enlarged view" 
            style={{ maxWidth: '90%', maxHeight: '90vh', borderRadius: '12px' }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default Gallery