import React, { useState } from "react";
// import "./style.css";
import SigninLogo from "../../Assests/logo.png";
import Google from "../../Assests/google.png";
import Facebook from "../../Assests/facebook.svg";
import Apple from "../../Assests/apple.png";
import { NavLink } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { SigninContainer,Left,Right,SigninBox,SigninBoxText, InputBoxInputs, SigninBoxInputBox, SigninPageLoginBtn, OtherLoginOption, AskSignUp, Or, OtherOption, OtherOptionBox, OtherOptionBoxLogo } from "./style.js";

const Sign = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState();
  return (
    <SigninContainer>
      <Left>
        <img src={SigninLogo} alt="" />
      </Left>
      <Right>
        <SigninBox>
          <div className="signin-box-logo">
            <img src={SigninLogo} alt="" />
          </div>
          <SigninBoxText>
            <h1>Sign In to your Account</h1>
            <span>Welcome! please enter your detail</span>
          </SigninBoxText>

          <InputBoxInputs>
            <SigninBoxInputBox>
              <span>Phone</span>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                className="phone-input"
              />
            </SigninBoxInputBox>
            <SigninBoxInputBox>
              <span>Name</span>
              <input type="text" placeholder="Enter Your Name" />
            </SigninBoxInputBox>
            <SigninBoxInputBox>
              <span>Email</span>
              <input type="text" placeholder="Email" />
            </SigninBoxInputBox>
            <SigninBoxInputBox>
              <span>Password</span>
              <input
                type={show == true ? "text" : "password"}
                placeholder="Password"
              />
            </SigninBoxInputBox>

            <SigninPageLoginBtn>
              <NavLink to={"/signinotp"} style={{ textDecoration: "none" }}>
                {" "}
                <button>Login</button>{" "}
              </NavLink>
            </SigninPageLoginBtn>
          </InputBoxInputs>
          <OtherLoginOption>
            <AskSignUp>
              <span>Already have an account?</span>
              <NavLink to={"/login"} style={{ textDecoration: "none" }}>
                <a href=""> Login</a>
              </NavLink>
            </AskSignUp>
            <Or>
              <span>Or</span>
            </Or>
            <OtherOption>
              <OtherOptionBox>
                <OtherOptionBoxLogo>
                  <img src={Google} alt="" />
                </OtherOptionBoxLogo>
                <div className="other-option-box-text">
                  <span>Sign in with Google</span>
                </div>
              </OtherOptionBox>
              <OtherOptionBox>
                <OtherOptionBoxLogo>
                  <img src={Facebook} alt="" />
                </OtherOptionBoxLogo>
                <div className="other-option-box-text">
                  <span>Sign in with Facebook</span>
                </div>
              </OtherOptionBox>
              <OtherOptionBox>
                <OtherOptionBoxLogo>
                  <img src={Apple} alt="" />
                </OtherOptionBoxLogo>
                <div className="other-option-box-text">
                  <span>Sign in with Apple</span>
                </div>
              </OtherOptionBox>
            </OtherOption>
          </OtherLoginOption>
        </SigninBox>
      </Right>
    </SigninContainer>
  );
};

export default Sign;
