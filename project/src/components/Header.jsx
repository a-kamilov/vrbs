import React from 'react'
import logo from './img/logo.png'
import HeaderContent from './img/header.png'

const Header = () => {
  return (
    <div className='header'>
      <div className="navbar">
        <a href="#">
        <img src={logo}/>
        <p> Zone.</p> 
        </a>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Blog</a></li>
          <button>Contact us</button>
        </ul>

      </div>


    </div>
  )
}

export default Header