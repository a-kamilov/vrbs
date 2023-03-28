import React from 'react'
import logo from './img/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="links">
        <div className="section">
          <ul>
            <li><a href="#" className='logo'><img src={logo}/>Zone.</a></li>
            <li><a href="#"><i class="fas fa-map-marker-alt"></i>Dhaka, Bangladesh</a></li>
            <li><a href="#"><i class="fa-solid fa-phone"></i>0943833399</a></li>
            <li><a href="#"><i class="fa-solid fa-envelope"></i>support@zone.com</a></li>
            <li><a href="#"></a></li>
          </ul>
        </div>
      
      </div>


    </div>
  )
}

export default Footer