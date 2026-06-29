// src/context/DataContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react'

const DataContext = createContext()

const initialMenu = [
  { id: 1, name: 'Grilled Salmon', category: 'Mains', price: 28.99, description: 'Fresh Atlantic salmon with lemon butter sauce', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400', popular: true },
  { id: 2, name: 'Truffle Pasta', category: 'Mains', price: 24.99, description: 'Handmade pasta with black truffle cream', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400', popular: true },
  { id: 3, name: 'Wagyu Burger', category: 'Mains', price: 22.99, description: 'Premium wagyu beef with caramelized onions', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', popular: true },
  { id: 4, name: 'Caesar Salad', category: 'Starters', price: 14.99, description: 'Crisp romaine with house-made dressing', image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400', popular: true },
  { id: 5, name: 'Bruschetta', category: 'Starters', price: 12.99, description: 'Toasted bread with tomato & basil', image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400', popular: false },
  { id: 6, name: 'Tiramisu', category: 'Desserts', price: 10.99, description: 'Classic Italian coffee dessert', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400', popular: true },
  { id: 7, name: 'Crème Brûlée', category: 'Desserts', price: 9.99, description: 'Vanilla custard with caramelized sugar', image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400', popular: false },
  { id: 8, name: 'Margherita Pizza', category: 'Mains', price: 18.99, description: 'San Marzano tomatoes & fresh mozzarella', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400', popular: true },
  { id: 9, name: 'Ahi Tuna Tartare', category: 'Starters', price: 19.99, description: 'Sushi-grade tuna with avocado', image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400', popular: false },
  { id: 10, name: 'Filet Mignon', category: 'Mains', price: 42.99, description: '8oz prime beef with red wine reduction', image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400', popular: true },
  { id: 11, name: 'Chocolate Lava Cake', category: 'Desserts', price: 11.99, description: 'Warm chocolate cake with molten center', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400', popular: false },
  { id: 12, name: 'Caprese Salad', category: 'Starters', price: 13.99, description: 'Fresh mozzarella, tomatoes & basil', image: 'https://images.unsplash.com/photo-1608032077018-c9aad9565d2b?w=400', popular: false }
]

export function DataProvider({ children }) {
  const [menuItems, setMenuItems] = useState(() => {
    const saved = localStorage.getItem('menuItems')
    return saved ? JSON.parse(saved) : initialMenu
  })
  
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('orders')
    return saved ? JSON.parse(saved) : []
  })
  
  const [reservations, setReservations] = useState(() => {
    const saved = localStorage.getItem('reservations')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('menuItems', JSON.stringify(menuItems))
  }, [menuItems])

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders))
  }, [orders])

  useEffect(() => {
    localStorage.setItem('reservations', JSON.stringify(reservations))
  }, [reservations])

  const addMenuItem = (item) => {
    setMenuItems(prev => [...prev, { ...item, id: Date.now() }])
  }

  const updateMenuItem = (id, updates) => {
    setMenuItems(prev => prev.map(item => 
      item.id === id ? { ...item, ...updates } : item
    ))
  }

  const deleteMenuItem = (id) => {
    setMenuItems(prev => prev.filter(item => item.id !== id))
  }

  const addOrder = (order) => {
    const newOrder = {
      ...order,
      id: Date.now(),
      orderNumber: 'ORD-' + String(Date.now()).slice(-6),
      date: new Date().toISOString(),
      status: 'Pending'
    }
    setOrders(prev => [newOrder, ...prev])
    return newOrder
  }

  const updateOrderStatus = (id, status) => {
    setOrders(prev => prev.map(order => 
      order.id === id ? { ...order, status } : order
    ))
  }

  const addReservation = (reservation) => {
    const newReservation = {
      ...reservation,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      status: 'Confirmed'
    }
    setReservations(prev => [newReservation, ...prev])
    return newReservation
  }

  const updateReservationStatus = (id, status) => {
    setReservations(prev => prev.map(res => 
      res.id === id ? { ...res, status } : res
    ))
  }

  return (
    <DataContext.Provider value={{
      menuItems,
      orders,
      reservations,
      addMenuItem,
      updateMenuItem,
      deleteMenuItem,
      addOrder,
      updateOrderStatus,
      addReservation,
      updateReservationStatus
    }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext)