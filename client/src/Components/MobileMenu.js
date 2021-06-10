import React from 'react'
import { Link, Redirect } from "react-router-dom";

import "../styles/MobileMenu.css"
import MobileSearch from './MobileSearch';

const MobileMenu = ({ setMenuClicked }) => {

  const handleMenuClose = () => {
    setMenuClicked(false)
    // return <Redirect to="/" />
  }

  return (

    <div className="mobile-menu-container">
      <div className="menu-close">
        <button onClick={handleMenuClose}>
          <i class="fas fa-times"></i>
        </button>
      </div>

      <MobileSearch />
      <ul className="mobile-menu">
        <Link to="/games" onClick={handleMenuClose}>
          <li>GAMES</li>
        </Link>
        <Link to="/news" onClick={handleMenuClose}>
          <li>NEWS</li>
        </Link>
        <Link to="/reviews" onClick={handleMenuClose}>
          <li>REVIEWS</li>
        </Link>
        <Link to="/login" onClick={handleMenuClose}>
          <li>LOGIN</li>
        </Link>
      </ul>


    </div>
  )
}

export default MobileMenu
