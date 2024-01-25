import React from "react";
// import "./style.css";
import Car from "../../Assests/discription.png";
import { DiscriptionContainer,DiscriptionLogo,DiscriptionText,LeftCircle,RightCircle} from "./style.js";
const Discription = () => {
  return (
    <DiscriptionContainer>
      <DiscriptionLogo>
        <LeftCircle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="494"
            height="455"
            viewBox="0 0 494 455"
            fill="none"
          >
            <path
              d="M475.35 317.189C392.844 470.072 209.68 462.692 147.238 445.552C84.7964 428.412 -64.4772 373.425 31.7359 181.301C127.949 -10.8236 278.442 -76.1469 306.337 116.011C334.232 308.169 557.856 164.307 475.35 317.189Z"
              fill="#CBC9C2"
              fill-opacity="0.56"
            />
          </svg>
        </LeftCircle>
        <RightCircle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="472"
            height="417"
            viewBox="0 0 472 417"
            fill="none"
          >
            <path
              d="M28.9942 80.9894C136.971 -43.549 321.613 9.26966 362.982 22.4105C404.351 35.5514 547.662 125.695 418.993 283.527C290.323 441.359 135.852 474.098 147.857 294.186C159.862 114.274 -78.9824 205.528 28.9942 80.9894Z"
              fill="#3563E9"
            />
          </svg>
        </RightCircle>
        <img src={Car} alt="" />
      </DiscriptionLogo>
      <DiscriptionText>
        <h1>Rent a Car</h1>
        <span>
          We pride ourselves in always going the extra mile for our customers.
        </span>
      </DiscriptionText>
    </DiscriptionContainer>
  );
};

export default Discription;
