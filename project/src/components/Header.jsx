import React from "react";
import logo from "./img/logo.png";
import HeaderContent from "./img/header.png";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${HeaderContent})`,
        backgroundPositionX: "530px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="navbar">
        <a href="#">
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
        <button>Join us</button> <button> Watch video</button>
      </div>
    </div>
  );
};

export default Header;
