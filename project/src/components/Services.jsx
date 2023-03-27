import React from "react";
import icon1 from "./img/orm.png";
import icon2 from "./img/sa.png";
import icon3 from "./img/cp.png";
import icon4 from "./img/smt.png";
import icon5 from "./img/an.png";
import icon6 from "./img/mpn.png";

const Services = () => {
  return (
    <div className="services">
      <h1>Our Service </h1>
      <p>
        We turn information into actionable insights We work to understand your
        issues and are driven to ask better questions in the pursuit of making
        work.
      </p>
      <div className="cards">
        <div className="card">
          <img src={icon1} />
          <h2>Order Management</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
            quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
          <a href="#">
            Learn more <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="card">
          <img src={icon2} />
          <h2>Social Assistant</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
            quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
          <a href="#">
            Learn more <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="card">
          <img src={icon3} />
          <h2>Crypto Platform</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
            quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
          <a href="#">
            Learn more <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="card">
          <img src={icon4} />
          <h2>Smart Trading Modules</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
            quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
          <a href="#">
            Learn more <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="card">
          <img src={icon5} />
          <h2>Analyzer of the News</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
            quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
          <a href="#">
            Learn more <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="card">
          <img src={icon6} />
          <h2>Module of Price Notification</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
            quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
          <a href="#">
            Learn more <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
