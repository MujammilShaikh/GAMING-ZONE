import React from 'react'
import { Link } from 'react-router-dom'

import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-network-p">
        <p>FOLLOW US</p>
      </div>
      <div className="social-network-div">
        <a target="_blank" href="https://www.instagram.com/mujammil4444/"><div><i class="fab fa-instagram"></i></div></a>
        {/* <a target="_blank" href="#"><div><i class="fab fa-twitter"></i></div></a>
        <a target="_blank" href="#"><div><i class="fab fa-facebook-square"></i></div></a> */}
        <a target="_blank" href="https://www.linkedin.com/in/mujammil-shaikh-80a33619b/"><div><i class="fab fa-linkedin-in"></i></div></a>
      </div>
      <div className="copyright-div">
        <p>Copyright &copy; 2021 All rights reserved by <a>GAMING ZONE</a></p>
      </div>
    </div>
  )
}

export default Footer
 