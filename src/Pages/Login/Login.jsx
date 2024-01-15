import React, { useState } from "react";
import "./style.css";
import LoginLogo from "../../Assests/logo.png";
import Google from "../../Assests/google.png";
import Apple from "../../Assests/apple.png";
import Facebook from "../../Assests/facebook.svg";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="login-container">
      <div className="left">
        <img src={LoginLogo} alt="" />
      </div>
      <div className="right">
        <div className="login-box">
          <div className="login-box-logo">
            <img src={LoginLogo} alt="" />
          </div>
          <div className="login-box-text">
            <h1>Login to your Account</h1>
            <span>Welcome back! please enter your detail</span>
          </div>
          <div className="login-box-inputs">
            <div className="login-box-input-box">
              <span>Email</span>
              <input type="text" placeholder="Emai" />
            </div>
            <div className="login-box-input-box">
              <span>Password</span>
              <input
                type={show == true ? "text" : "password"}
                placeholder="Password"
              />
            </div>
            <div className="forget-password">
              <div className="forget-password-check-box">
                <input type="checkbox" name="" id="" />
                <span>Remember me</span>
              </div>
              <div className="forget-password-link">
                <NavLink
                  to={"/forgetpassword"}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <span>Forgot Password?</span>
                </NavLink>
              </div>
            </div>
            <div className="login-page-login-btn">
              <NavLink to={"/"} style={{ textDecoration: "none" }}>
                {" "}
                <button>Login</button>
              </NavLink>
            </div>
          </div>
          <div className="other-login-option">
            <div className="ask-signup">
              <span>Dont have an account?</span>
              <NavLink to={"/signin"} style={{ textDecoration: "none" }}>
                <a href="$"> Sign Up</a>
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

export default Login;
