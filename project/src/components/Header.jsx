import React from "react";
import logo from "./img/logo.png";
import HeaderContent from "./img/header.png";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <a href="#" className="logo">
          <img src={logo} />
          <p> Zone.</p>
        </a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <button>Contact us</button>
        </ul>
      </div>
      <div className="content">
        <h1>Virtual Reality Business Solutions</h1>
        <p>
          We have over 15 year exprience in business consultting arena. We have
          over 15 year exprience in business consultting arena and artficial
          intelligence.
        </p>
        <button>Join us</button>
        <button>
          <i class="fa-solid fa-circle-play"></i>Watch video
        </button>
      </div>
      <img src={HeaderContent} />
    </div>
  );
};

export default Header;
