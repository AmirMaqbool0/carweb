import React, { useState } from "react";
import "./style.css";
import SigninLogo from "../../Assests/logo.png";
import Google from "../../Assests/google.png";
import Facebook from "../../Assests/facebook.svg";
import Apple from "../../Assests/apple.png";
import { NavLink } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Sign = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState();
  return (
    <div className="signin-container">
      <div className="left">
        <img src={SigninLogo} alt="" />
      </div>
      <div className="right">
        <div className="signin-box">
          <div className="signin-box-logo">
            <img src={SigninLogo} alt="" />
          </div>
          <div className="signin-box-text">
            <h1>Sign In to your Account</h1>
            <span>Welcome! please enter your detail</span>
          </div>

          <div className="signin-box-inputs">
            <div className="signin-box-input-box">
              <span>Phone</span>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                className="phone-input"
              />
            </div>
            <div className="signin-box-input-box">
              <span>Name</span>
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div className="signin-box-input-box">
              <span>Email</span>
              <input type="text" placeholder="Email" />
            </div>
            <div className="signin-box-input-box">
              <span>Password</span>
              <input
                type={show == true ? "text" : "password"}
                placeholder="Password"
              />
            </div>

            <div className="signin-page-login-btn">
              <NavLink to={"/signinotp"} style={{ textDecoration: "none" }}>
                {" "}
                <button>Login</button>{" "}
              </NavLink>
            </div>
          </div>
          <div className="other-login-option">
            <div className="ask-signup">
              <span>Already have an account?</span>
              <NavLink to={"/login"} style={{ textDecoration: "none" }}>
                <a href=""> Login</a>
              </NavLink>
            </div>
            <div className="or">
              <span>Or</span>
            </div>
            <div className="other-option">
              <div className="other-option-box">
                <div className="other-option-box-logo">
                  <img src={Google} alt="" />
                </div>
                <div className="other-option-box-text">
                  <span>Sign in with Google</span>
                </div>
              </div>
              <div className="other-option-box">
                <div className="other-option-box-logo">
                  <img src={Facebook} alt="" />
                </div>
                <div className="other-option-box-text">
                  <span>Sign in with Facebook</span>
                </div>
              </div>
              <div className="other-option-box">
                <div className="other-option-box-logo">
                  <img src={Apple} alt="" />
                </div>
                <div className="other-option-box-text">
                  <span>Sign in with Apple</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
