import React, { useContext } from 'react'
import CartContext from '../Context/CartContext'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const { cart } = useContext(CartContext)

  return (
    <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink to={""} className="navbar-brand">Product Shiping Center</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ?
                    "text-white fw-bold text-capitalize" : "text-white"}`}
                aria-current="page"
                to={''}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ?
                    "text-white fw-bold text-capitalize" : "text-white"}`}
                aria-current="page"
                to={'products'}>Products</NavLink>
            </li>
            <li className="nav-item ms-auto">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ?
                    "text-white fw-bold text-capitalize" : "text-white"}`}
                aria-current="page"
                to={'shopingcart'}> {cart.length > 0 ? <i class="bi bi-cart-check-fill"></i> : <i className="bi bi-cart"></i>}  {"  "}
                {cart.length > 0 ? (<span className='text-white fw-bold'>{cart.length}</span>) : (<span></span>)}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header