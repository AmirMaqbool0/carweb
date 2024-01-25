import React from "react";
// import "./style.css";
import ForgetOtpLogo from "../../Assests/logo.png";
import Countdown from "react-countdown";
import { NavLink } from "react-router-dom";
import { ForgetOtpContainer,ForgetOtpBox,ForgetOtpLeft,ForgetOtpRight,ForgetOtptext,ForgetOtpInput,ForgetOtpBtn,ForgetOtpInputs,Timer } from "./style.js";
const ForgetPassworsdOTP = () => {
  return (
    <ForgetOtpContainer>
      <ForgetOtpBox>
        <ForgetOtpLeft>
          <img src={ForgetOtpLogo} alt="" />
        </ForgetOtpLeft>
        <ForgetOtpRight>
          <div className="forget-otp-logo">
            <img src={ForgetOtpLogo} alt="" />
          </div>
          <ForgetOtptext>
            <h1>OTP Verification</h1>
            <span>
              Please enter the OTP code we have send to your Registered email
            </span>
          </ForgetOtptext>
          <ForgetOtpInput>
            <ForgetOtpInputs>
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
            </ForgetOtpInputs>
            <Timer>
              <Countdown date={Date.now() + 60000} daysInHours="false" />
            </Timer>
            <ForgetOtpBtn>
              <NavLink to={"/newpassword"} style={{ textDecoration: "none" }}>
                {" "}
                <button>Confirm</button>{" "}
              </NavLink>
            </ForgetOtpBtn>
          </ForgetOtpInput>
        </ForgetOtpRight>
      </ForgetOtpBox>
    </ForgetOtpContainer>
  );
};

export default ForgetPassworsdOTP;
