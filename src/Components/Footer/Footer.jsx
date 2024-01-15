import React from "react";
import "./style.css";
import FooterLogo from "../../Assests/logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <div className="footer-left">
          <div className="footer-left-logo">
            <img src={FooterLogo} alt="" />
          </div>
          <div className="footer-left-content">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              quod modi? Esse explicabo iste ipsum culpa commodi. Dicta, eaque
              repellendus.
            </span>
          </div>
        </div>
        <div className="footer-right">
          <div className="about-link">
            <div className="link-heading">
              <span>About</span>
            </div>
            <div className="links">
              <ul>
                <li>Howitsworks</li>
                <li>termsandcondition</li>
                <li>privacypolicy</li>
                <li>aboutus</li>
              </ul>
            </div>
          </div>
          <div className="importent-link">
            <div className="link-heading">
              <span>Important Links</span>
            </div>
            <div className="links">
              <ul>
                <li>VehicleList</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="Socials-link">
            <div className="link-heading">
              <span>Socials</span>
            </div>
            <div className="links">
              <ul>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bar"></div>
      <div className="footer-rights">
        <span>©2023 CharterCar. All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
