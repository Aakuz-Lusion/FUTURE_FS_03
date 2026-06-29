# Update main.jsx to use HashRouter properly
@"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { CartProvider } from './context/CartContext'
import { DataProvider } from './context/DataContext'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <DataProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </DataProvider>
    </HashRouter>
  </React.StrictMode>
)
"@ | Out-File -FilePath src/main.jsx -Encoding utf8