import React from "react";
// import "./style.css";
import FooterLogo from "../../Assests/logo.png";
import { AboutLink, FooterBar, FooterBox, FooterContainer, FooterLeft, FooterLeftContent, FooterLeftLogo, FooterRight, FooterRights, ImportentLink, LinkHeading, Links } from "./style.js";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterLeft>
          <FooterLeftLogo>
            <img src={FooterLogo} alt="" />
          </FooterLeftLogo>
          <FooterLeftContent>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              quod modi? Esse explicabo iste ipsum culpa commodi. Dicta, eaque
              repellendus.
            </span>
          </FooterLeftContent>
        </FooterLeft>
        <FooterRight>
          <AboutLink>
            <LinkHeading>
              <span>About</span>
            </LinkHeading>
            <Links>
              <ul>
                <li>Howitsworks</li>
                <li>termsandcondition</li>
                <li>privacypolicy</li>
                <li>aboutus</li>
              </ul>
            </Links>
          </AboutLink>
          <ImportentLink>
            <LinkHeading>
              <span>Important Links</span>
            </LinkHeading>
            <Links>
              <ul>
                <li>VehicleList</li>
                <li>Contact Us</li>
              </ul>
            </Links>
          </ImportentLink>
          <div className="Socials-link">
            <LinkHeading>
              <span>Socials</span>
            </LinkHeading>
            <Links>
              <ul>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </Links>
          </div>
        </FooterRight>
      </FooterBox>
      <FooterBar></FooterBar>
      <FooterRights>
        <span>©2023 CharterCar. All rights reserved</span>
      </FooterRights>
    </FooterContainer>
  );
};

export default Footer;
