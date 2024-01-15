import React, { useState } from "react";
import "./style.css";
import ForgetLogo from "../../Assests/logo.png";
import { NavLink } from "react-router-dom";
const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  console.log(email);
  return (
    <div className="forget-password-container">
      <div className="forget-password-box">
        <div className="forget-password-left">
          <img src={ForgetLogo} alt="" />
        </div>
        <div className="forget-password-right">
          <div className="forget-password-logo">
            <img src={ForgetLogo} alt="" />
          </div>
          <div className="forget-password-text">
            <h1>Forget your Account?</h1>
            <span>Please enter your registered email</span>
          </div>
          <div className="forget-password-input">
            <div>
              <span>Email</span>
              <input
                type="text"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="forget-password-btn">
              <NavLink
                to={"/forgetpasswordotp"}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <button>Continue</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
