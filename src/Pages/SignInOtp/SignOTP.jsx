import React from "react";
import ForgerotpLogo from "../../Assests/logo.png";
import Countdown from "react-countdown";
import "./style.css";
import { NavLink } from "react-router-dom";
const SignOTP = () => {
  return (
    <div className="forget-otp-container">
      <div className="forget-otp-box">
        <div className="forget-otp-left">
          <img src={ForgerotpLogo} alt="" />
        </div>
        <div className="forgget-otp-right">
          <div className="forget-otp-logo">
            <img src={ForgerotpLogo} alt="" />
          </div>
          <div className="forget-otp-text">
            <h1>OTP Verification</h1>
            <span>
              Please enter the OTP code we have send to your Registered email
            </span>
          </div>
          <div className="forget-otp-input">
            <div className="forget-otp-inputs">
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
            </div>
            <div className="timer">
              <Countdown date={Date.now() + 60000} daysInHours="false" />
            </div>
            <div className="forget-otp-btn">
              <NavLink to={"/"} style={{ textDecoration: "none" }}>
                {" "}
                <button>Confirm</button>{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignOTP;
