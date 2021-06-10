import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

import MobileMenu from "../Components/MobileMenu"
import "../styles/Nav.css"
import Search from "./Search";
import bg1 from "../img/logo1.png"


const Nav = () => {

  const isLoggedIn = useSelector(state => state.idFor.isLoggedIn)
  const [menuClicked, setMenuClicked] = useState(false)

  if (menuClicked) {
    return <MobileMenu setMenuClicked={setMenuClicked} />
  }

  return (
    <div className="nav-container">
      <div className="menu-bars">
        <button onClick={() => setMenuClicked(true)}>
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div className="logo-div" >
        <Link to="/">
          <div class="logo-img">
          <img src={bg1}></img>
          </div>
        </Link>
      </div>
      <ul className="menu">
        <Link to="/games" style={{ TextDecoration: "none" }}>
          <li>GAMES</li>
        </Link>
        <Link to="/news">
          <li>NEWS</li>
        </Link>
        <Link to="/reviews">
          <li>REVIEWS</li>
        </Link>
        {
          isLoggedIn ? <Link className="loginlink" to="/login"><li >Dashboard</li></Link> : <Link to="/login"><li className="loginlink">Login / Register</li></Link>
        }

      </ul>


      {/* <Search /> */}

      {/* Search Icon Only */}

      <div className="mobile-search">
        <button onClick={() => setMenuClicked(true)}>
          <i class="fas fa-search"></i>
        </button>
      </div>


    </div>
  )
}

export default Nav;