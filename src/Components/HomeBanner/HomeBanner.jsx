import React from "react";
// import "./style.css";
import { HomeBannerContainer, HomeBannerText,HomeBannerPage } from "./style.js";
import HomeBannerPic from '../../Assests/HomeBanner.png'
const HomeBanner = () => {
  return (
    <HomeBannerContainer>
      <HomeBannerPage picurl={HomeBannerPic}>
        <HomeBannerText>
          <h1>safer ,faster and comfortable</h1>
          <span>Get in touch with our luxury cars</span>
          <button>Rent Now</button>
        </HomeBannerText>
      </HomeBannerPage>
    </HomeBannerContainer>
  );
};

export default HomeBanner;
