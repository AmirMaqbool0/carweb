import React from "react";
import ForgerotpLogoPic from "../../Assests/logo.png";
import Countdown from "react-countdown";
import { NavLink } from "react-router-dom";
import { ForgetOtpBox, ForgetOtpBtn, ForgetOtpContainer, ForgetOtpInput, ForgetOtpInputs, ForgetOtpLeft, ForgetOtpRight, ForgetOtpText, Timer } from "./style.js";
const SignOTP = () => {
  return (
    <ForgetOtpContainer>
      <ForgetOtpBox>
        <ForgetOtpLeft>
          <img src={ForgerotpLogoPic} alt="" />
        </ForgetOtpLeft>
        <ForgetOtpRight>
          <div className="forgegt-otp-logo">
            <img src={ForgerotpLogoPic} alt="" />
            </div>
          <ForgetOtpText>
            <h1>OTP Verification</h1>
            <span>
              Please enter the OTP code we have send to your Registered email
            </span>
          </ForgetOtpText>
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
              <NavLink to={"/"} style={{ textDecoration: "none" }}>
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

export default SignOTP;
