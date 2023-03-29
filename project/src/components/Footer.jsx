import React from 'react'
import logo from './img/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="links">
        <div className="section_1">
          <ul>
            <li><a href="#" className='logo'><img src={logo}/></a></li>
            <li className='us'><i class="fas fa-map-marker-alt"></i>Dhaka, Bangladesh</li>
            <li className='us'><i class="fa-solid fa-phone"></i>0943833399</li>
            <li className='us'><i class="fa-solid fa-envelope"></i>support@zone.com</li>
            <li className='social_media'>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fa-brands fa-pinterest"></i>
            </li>
          </ul>
        </div>
        <div className="section">
          <ul>
            <li><a href="#">Service</a></li>
            <li><a href="#">Order Management</a></li>
            <li><a href="#">Social Assistant</a></li>
            <li><a href="#">Crypto Platform</a></li>
            <li><a href="#">Analyzer of the News</a></li>
          </ul>
        </div>
        <div className="section">
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Our trusted partner</a></li>
            <li><a href="#">New users FAQ</a></li>
          </ul>
        </div>
        <div className="section">
          <ul>
            <li><a href="#">Supports</a></li>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Feedbcak</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Terms conditins</a></li>
          </ul>
        </div>
        <div className="section">
          <ul>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Download app</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">What’s new</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <div className="privacy">
        <p>&copy; 2021 Zone. - All rights reserved.</p>
        <ul>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Terms</a></li>
        </ul>
      </div>


    </div>
  )
}

export default Footer