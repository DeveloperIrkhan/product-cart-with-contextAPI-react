import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import CartContextProvider from '../Context/CartContextProvider'
const Layout = () => {
  return (
    <>
      <Header />
      <CartContextProvider>
        <Outlet />
      </CartContextProvider>
      <Footer />
    </>
  )
}

export default Layout