import React from "react";
import Khan from "./img/Khan.jpg";
import Alina from "./img/Alina.jpg";
import Alex from "./img/Alex.jpg";
import Afroza from "./img/Afroza.jpg";

const AboutTeam = () => {
  return (
    <div className="aboutTeam">
      <h1>Met Our Team</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </p>
      <div className="workers">
        <div className="worker">
          <img src={Khan} />
          <h3>Sunny Khan</h3>
          <p>Executive officer</p>
          <div className="icons">
            <a target="_blank" href="https://www.skype.com/">
              <i class="fab fa-skype"></i>
            </a>
            <a target="_blank" href="https://ru.linkedin.com/">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a target="_blank" href="https://twitter.com/?lang=eng">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
        <div className="worker">
          <img src={Alina} />
          <h3>Alina Jesia</h3>
          <p>UX/UI DESIGNER</p>
          <div className="icons">
            <a target="_blank" href="https://www.skype.com/">
              <i class="fab fa-skype"></i>
            </a>
            <a target="_blank" href="https://ru.linkedin.com/">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a target="_blank" href="https://twitter.com/?lang=eng">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
        <div className="worker">
          <img src={Alex} />
          <h3>Alex Sohag</h3>
          <p>BUSINESS DEVELOPMENT</p>
          <div className="icons">
            <a target="_blank" href="https://www.skype.com/">
              <i class="fab fa-skype"></i>
            </a>
            <a target="_blank" href="https://ru.linkedin.com/">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a target="_blank" href="https://twitter.com/?lang=eng">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
        <div className="worker">
          <img src={Afroza} />
          <h3>Afroza Mou</h3>
          <p>Head of marketing</p>
          <div className="icons">
            <a target="_blank" href="https://www.skype.com/">
              <i class="fab fa-skype"></i>
            </a>
            <a target="_blank" href="https://ru.linkedin.com/">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a target="_blank" href="https://twitter.com/?lang=eng">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
