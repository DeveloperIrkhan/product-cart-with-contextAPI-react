import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import CartContextProvider from './Context/CartContextProvider'
import App from './App'



ReactDOM.createRoot(document.getElementById('root')).render(
    <CartContextProvider>
      <App />
    </CartContextProvider>
)
