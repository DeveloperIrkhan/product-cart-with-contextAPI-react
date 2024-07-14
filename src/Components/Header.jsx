import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink to={""} className="navbar-brand">Product Shiping Center</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ?
                    "text-danger fw-bold text-capitalize" : "text-black"}`}
                aria-current="page"
                to={''}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ?
                    "text-danger fw-bold text-capitalize" : "text-black"}`}
                aria-current="page"
                to={'products'}>Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ?
                    "text-danger fw-bold text-capitalize" : "text-black"}`}
                aria-current="page"
                to={'shopingcart'}>Shoping Cart</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header